import {Component, OnInit} from '@angular/core';

declare let jquery: any;
declare let $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public loading = true;
  type = 'CircleSimple';

  ngOnInit(): void {

    setTimeout( () => {
      this.loading = false;
      setTimeout(() => {
        $('.level-bar-inner').css('width', '0');
        $('.level-bar-inner').each(function () {
          const itemWidth = $(this).data('level');
          $(this).animate({
            width: itemWidth
          }, 800);
        }, 500);
      })
    }, 3000);
  }

}
