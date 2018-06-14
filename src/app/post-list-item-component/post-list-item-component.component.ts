import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() title: string;
  
  @Input() content: string;
  
  @Input() loveIts: number = 0;
  
  created_at: Date;

  constructor() { }

  ngOnInit() {
    this.created_at = new Date();
  }

  onLoveIt() {
    this.loveIts++;
  }

  onDontLoveIt() {
    this.loveIts--;
  }
  
}
