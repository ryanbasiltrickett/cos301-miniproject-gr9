import { Directive, ElementRef, Input } from '@angular/core';
import { Timestamp } from '@angular/fire/firestore';

@Directive({
  selector: '[measureTime]',
})
export class MeasureOnScreenTimeDirective {
  @Input() postid!: string;
  startTime!: Timestamp;
  endTime!: Timestamp;

  constructor(private el: ElementRef) {
    console.log('MeasureOnScreenTimeDirective constructed');

    const intersectionObserverOptions = {
      threshold: 1.0,
    };
    const obvserver = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry: IntersectionObserverEntry) => {
          if (entry.isIntersecting) {
            this.startTime = Timestamp.now();
          } else {
            this.endTime = Timestamp.now();

            const timeOnScreen =
              this.endTime.toMillis() - this.startTime.toMillis();
            console.log('Time on screen: ', timeOnScreen, 'ms');

            // distapch an action that updates the time that a post has
          }
        });
      },
      intersectionObserverOptions
    );

    obvserver.observe(this.el.nativeElement);
  }
}
