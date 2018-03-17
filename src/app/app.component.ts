import { Component } from '@angular/core';
import { HackerNewsService } from './hacker-news.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	dtOptions: any = {};
 dtTrigger: Subject<any> = new Subject();	
  currentPage: number = 1;
 
  users: Array<any> = [];
  
  scrollCallback;

  constructor(private hackerNewsSerivce: HackerNewsService) {

    this.scrollCallback = this.getStories.bind(this);

   }

   ngOnInit(){
   	this.setupDataTable();
   }

   setupDataTable(){

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 20,
      "retrieve": true,
     

      dom: 'Bfrtip',
      buttons: [
        'colvis',
        'copy',
        'print',
        'csv',       
        {
          text: 'Delete',
          key: '1',
          action: function (e, dt, node, config) {
            alert('deleted');
          }
        }
      ],
    };
  }




  getStories() {
  	console.log('hi');
    return this.hackerNewsSerivce.getLatestStories(this.currentPage).do(this.processData);
  }

  private processData = (news) => {
    this.currentPage++;
    console.log(news['complete'].data);
    this.users = this.users.concat(news['complete'].data);
     this.dtTrigger.next();
   // this.news = this.news.concat(news.json());
  }


}
