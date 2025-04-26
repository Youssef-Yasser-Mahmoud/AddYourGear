import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Product } from '../../../interfaces/product';
import { LowRateCardDirective } from '../../../directives/low-rate-card.directive';

@Component({
  selector: 'app-product-list',
  imports: [LowRateCardDirective],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnChanges {
  @Input() productObj!: Product;
  productList: Product[] = [
    {
      id: Math.random(),
      name: 'PCs',
      description: 'Powerful builds for work and play.',
      imageURL:
        'https://cataclysm.com.au/cdn/shop/articles/Featured_Image_aca3dcb5-c78b-47a9-a229-be5894d49b65.jpg?v=1692165109',
      rate: 7,
    },
    {
      id: Math.random(),
      name: 'Mice',
      description: 'Precision and comfort at your fingertips.',
      imageURL:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Razer_Naga_Classic.jpg/1200px-Razer_Naga_Classic.jpg',
      rate: 2.5,
    },
    {
      id: Math.random(),
      name: 'Keyboards',
      description: 'Mechanical and silent options available.',
      imageURL:
        'https://i0.wp.com/hirosarts.com/wp-content/uploads/2022/11/Adata-Golden-Summoner-Kyeboard.jpg?resize=700%2C450&ssl=1',
      rate: 5,
    },
    {
      id: Math.random(),
      name: 'Headphones',
      description: 'Immersive audio for every gamer and creator.',
      imageURL: 'https://cdn.mos.cms.futurecdn.net/FqRbifB3n4pA85smeB4Z57.jpg',
      rate: 4,
    },
  ];

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes['productObj']);

    if (changes['productObj'] && this.productObj) {
      this.productList.push(this.productObj);
    }
  }
}
