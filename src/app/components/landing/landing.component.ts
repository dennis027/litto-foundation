import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { StyleRenderer, lyl } from '@alyle/ui';

const STYLES = () => {
  return {
    carousel: () => lyl `{
      margin: auto
      // responsive
   
      height: 70vh
      // min-height: 220px
      // max-height: 320px
    }`,
    carouselItem: () => lyl `{
      display: flex
      text-align: center
      justify-content: flex-end
      align-items: center
      // width:100%
      // height: 100%
      flex-direction: column
      padding: 1em 1em 48px
      box-sizing: border-box
      color: #fff
      &:nth-child(3) {
        color: #2b2b2b
      }
    }`
  };
};

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: false,
  providers: [
    StyleRenderer
  ]
})
export class LandingComponent implements OnInit {


  readonly classes = this.sRenderer.renderSheet(STYLES);
  items = [
    {
      title: 'THE LITTO FOUNDATION',
      img: 'https://github.com/dennis027/litto-foundation/blob/master/src/assets/photos/litto5.jpeg?raw=true'
    },
    {
      title: 'THE LITTO FOUNDATION',
      img: 'https://github.com/dennis027/litto-foundation/blob/master/src/assets/photos/litto1.jpeg?raw=true' 
    },
    {
      title: 'THE LITTO FOUNDATION',
      img: 'https://github.com/dennis027/litto-foundation/blob/master/src/assets/photos/litto2.jpeg?raw=true'
    },
    {
      title: 'THE LITTO FOUNDATION',
      img: 'https://github.com/dennis027/litto-foundation/blob/master/src/assets/photos/litto3.jpeg?raw=true'
    },
    {
      title: 'THE LITTO FOUNDATION',
      img: 'https://github.com/dennis027/litto-foundation/blob/master/src/assets/photos/litto4.jpeg?raw=true'
    },
   
  ];

  constructor(
    private sRenderer: StyleRenderer
  ) { }


  ngOnInit(): void {
  }

}
