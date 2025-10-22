import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

interface GalleryItem {
  src: string;
  alt: string;
  title: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './gallery.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalleryComponent {
  galleryItems = signal<GalleryItem[]>([
    { src: 'https://cs11.livemaster.ru/storage/topicavatar/600x450/85/90/3d7f04a14464f8f40a115398a01d31cdf2c8k5.jpg?h=fay23uuoQAUUM0a4IV-E2Q', alt: 'Кабардинский женский наряд', title: 'Кабардинский женский наряд' },
    { src: 'https://sun9-50.userapi.com/s/v1/if2/gViCnUe0ZXhw6G1uyLEkzgd5YVIS4VA7YROWokjaDn87O0APVURBFv142Z0XzUbftzx8H71_NWa98hHDwSWMekyk.jpg', alt: 'Участники спектакля, 1908 г.', title: 'Участники спектакля, 1908 г.' },
    { src: 'https://sun9-38.userapi.com/s/v1/ig2/6nImjPaM9xfpPRl_Zyp6h-4UT5WfUkI667uOC6F3ZCk4sPLd2Omkg-oLxfWwgROMDkEhmVAI4l0rZBOJb31b_tc3.jpg', alt: 'Девушка в национальной одежде, 1908 г.', title: 'Девушка в национальной одежде, 1908 г.' },
    { src: 'https://sun9-2.userapi.com/s/v1/if2/USsVG9IdI7RqvroeMzmKd5HjtdEOdk2CC_ReVmA00pafu4wbY7RlrgQ1ykv-1FoO-w-Uo_0g1FJZsFJqLCwGqeOl.jpg', alt: 'Черкесский костюм, начало 20-го в.', title: 'Черкесский костюм, начало 20-го в.' },
    { src: 'https://sun9-51.userapi.com/s/v1/ig2/b251wSz8LMZ95CZHXi0xjCXBMAYapEtGif2w6mJ_LW86CvryBTtw7d4oSpph2kl_88g2vUtomC_SnRK2Iu-yTc-d.jpg', alt: 'Портрет пожилого мужчины, 1870-е гг.', title: 'Портрет пожилого мужчины, 1870-е гг.' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Flag_of_Kabardino-Balkaria.svg/1599px-Flag_of_Kabardino-Balkaria.svg.png', alt: 'Флаг Кабардино-Балкарии', title: 'Флаг Кабардино-Балкарии' },
    { src: 'https://avatars.mds.yandex.net/get-entity_search/65262/114117299/S600xU_2x', alt: 'Герб Кабардино-Балкарии', title: 'Герб Кабардино-Балкарии' },
    { src: 'https://i.pinimg.com/736x/95/32/56/9532566e0f69f86f445e69126c0126e5.jpg', alt: 'Кабардинский орнамент', title: 'Кабардинский орнамент' },
    { src: 'https://files.mediiia.ru/postimages/5947/94197be1dd274b069d0dbb1601370b5b/c2e21f47d0c841c6aab7a5082f85a949600x317.jpg', alt: 'Национальный узор', title: 'Национальный узор' },
    { src: 'https://textarchive.ru/images/1461/2920378/c58c932c.jpg', alt: 'Традиционный орнамент', title: 'Традиционный орнамент' },
    { src: 'https://celes.club/pictures/uploads/posts/2023-06/1685707422_celes-club-p-ornament-kabardinskii-risunok-risunok-kras-8.png', alt: 'Элемент узора', title: 'Элемент узора' },
    { src: 'https://i.ytimg.com/vi/CZCjb9z1f8I/maxresdefault.jpg', alt: 'Танцоры в национальных костюмах', title: 'Танцоры в национальных костюмах' },
    { src: 'https://www.kavkazdance.ru/images/Article/kabardinian.jpg', alt: 'Кабардинский танец', title: 'Кабардинский танец' },
    { src: 'https://avatars.mds.yandex.net/i?id=4f2029877ff77ad9c7662d32b1eb14ff_l-4101261-images-thumbs&n=13', alt: 'Народные музыкальные инструменты', title: 'Народные музыкальные инструменты' },
    { src: 'https://picsum.photos/seed/caucasusmountains/800/600', alt: 'Пейзаж Кавказских гор', title: 'Пейзаж Кавказских гор' },
  ]);

  selectedImage = signal<GalleryItem | null>(null);

  openImage(item: GalleryItem): void {
    this.selectedImage.set(item);
  }

  closeImage(): void {
    this.selectedImage.set(null);
  }
}