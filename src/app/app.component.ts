import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  elements = [];

  onBookAdded(data: {name: string, content: string}) {
    this.elements.push({
      type: 'book',
      name: data.name,
      content: data.content
    });
  }

  onArticleAdded(data: {name: string, content: string}) {
    this.elements.push({
      type: 'article',
      name: data.name,
      content: data.content
    });
  }
}
