import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
posts : any[]= [];
currentpage = 1;
postperpage = 10;
userId: any;
id: any;
  constructor(private postservice: PostService){ }

  ngOnInit(): void {
     this.fetchposts();
  }


  fetchposts(): void{
  this.postservice.getposts().subscribe((data=> {
this.posts = data;

console.log(this.posts);
  }));


  }

  

  get pginatedposts(){
    const startIndex = (this.currentpage - 1) * this.postperpage;
    const endIndex = startIndex + this.postperpage;
    return this.posts.slice(startIndex, endIndex);
  }

  

  
  nextPage() {
    if (this.currentpage * this.postperpage < this.posts.length) {
      this.currentpage++;
    }
  }

  prevPage() {
    if (this.currentpage > 1) {
      this.currentpage--;
    }
  }

}
