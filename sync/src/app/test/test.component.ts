import { Component, OnInit } from '@angular/core';
import { Observable, Subject, from, multicast, refCount, BehaviorSubject, ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onTest() {
    // this.testSubject()
    // this.testBehaviorSubject()
    // this.testReplaySubject()
    // this.testReplaySubjectWindowTime()
    this.testVoidSubject()
  }

  testSubject() {
    const subj = new Subject<number>()
    subj.subscribe({
      next: (data) => console.log(`Observer A: ${data}`)
    })
    subj.subscribe({
      next: (data) => console.log(`Observer B: ${data}`)
    })

    // subj.next(10)
    // subj.next(20)

    // const observable = from([1, 2, 3])
    // observable.subscribe(subj) // can be subscribed providing a subject

  }

  testMulticastedObservables() {
    // note: deprecated
    const source = from([1, 2, 3])
    const subject = new Subject<number>()
    const multicasted = source.pipe(multicast(subject), refCount()) // refCount makes the multicasted Observable automatically start executing when the first subscriber arrives, and stop executing when the last subscriber leaves.

    multicasted.subscribe({ next: (data) => console.log(`Observer A: ${data}`) })
    multicasted.subscribe({ next: (data) => console.log(`Observer B: ${data}`) })
    // multicasted.connect()
  }

  testBehaviorSubject() {
    // It stores the latest value emitted to its consumers, and whenever a new Observer subscribes, it will immediately receive the "current value" from the BehaviorSubject.
    const subject = new BehaviorSubject(0); // 0 is the initial value

    subject.subscribe({
      next: (v) => console.log(`observerA: ${v}`),
    });

    subject.next(1);
    subject.next(2);

    subject.subscribe({
      next: (v) => console.log(`observerB: ${v}`),
    });

    subject.next(3);
  }

  testReplaySubject() {
    // similar to BehaviorSubject, but also can store and replay multiple old values to new subcriber
    const subject = new ReplaySubject(3); // buffer 3 values for new subscribers

    subject.subscribe({
      next: (v) => console.log(`observerA: ${v}`),
    });

    subject.next(1);
    subject.next(2);
    subject.next(3);
    subject.next(4);

    subject.subscribe({
      next: (v) => console.log(`observerB: ${v}`),
    });

    subject.next(5);
  }

  testReplaySubjectWindowTime() {
    const subject = new ReplaySubject(25, 500 /* windowTime */)
    subject.subscribe({
      next: (v) => console.log(`observerA: ${v}`),
    });

    let i = 1;
    setInterval(() => subject.next(i++), 200);

    setTimeout(() => {
      subject.subscribe({
        next: (v) => console.log(`observerB: ${v}`),
      });
    }, 1000);

  }

  testVoidSubject() {
    const subject = new Subject<void>();

    subject.subscribe({
      next: () => console.log('One second has passed'),
    });

    setTimeout(() => subject.next(), 1000);
  }
}
