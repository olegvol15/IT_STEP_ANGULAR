import { Component } from '@angular/core';
import { NgFor } from '@angular/common';  

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  books = [
    {
      title: 'Великий Гэтсби',
      author: 'Фрэнсис Скотт Фицджеральд',
      description: 'Роман о американской мечте и разочарованиях эпохи джаза.',
      cover: 'https://knizhka.us/cdn/shop/files/fitsdzherald_velikii_getsbi_1_40305023-a629-4d7f-a058-bdfd343a7931.jpg?v=1710242583',
      authorImage: 'https://www.wsws.org/asset/28b92437-fc49-4791-8c85-d0f6f10e0de2?rendition=image1280'
    },
    {
      title: 'Убить пересмешника',
      author: 'Харпер Ли',
      description: 'История о расовой несправедливости и нравственном росте на Юге США.',
      cover: 'https://market.kemrsl.ru/wp-content/uploads/2023/04/10.jpg',
      authorImage: 'https://www.rulit.me/data/developer/images/lee-harper.jpg'
    },
    {
      title: 'Гордость и предубеждение',
      author: 'Джейн Остин',
      description: 'Роман о романтике, манерах и социальных ожиданиях.',
      cover: 'https://piotrovsky.store/upload/resize_cache/iblock/713/572_515_1/vgdibieuhihx0zniajh6xabob22pry3b.jpg',
      authorImage: 'https://briefly.ru/static/cache/authors/320/ostin.jpeg'
    }
  ];
}




