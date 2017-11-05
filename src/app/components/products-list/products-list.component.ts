import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products: any;
  productButtons: any = [{ 'class': 'button--primary', 'label': 'View Product' }];

  constructor() { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    //api call would be here
    this.products = [
      {
        id: 1,
        title: 'Product 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ligula arcu, faucibus at dapibus id, varius quis felis. Mauris tempus purus eget velit convallis sollicitudin.',
        cost: '$12.99',
        imageUrl: 'http://via.placeholder.com/350x150'
      },
      {
        id: 2,
        title: 'Product 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ligula arcu, faucibus at dapibus id, varius quis felis. Mauris tempus purus eget velit convallis sollicitudin.',
        cost: '$9.99',
        imageUrl: 'http://via.placeholder.com/350x150'
      },
      {
        id: 3,
        title: 'Product 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ligula arcu, faucibus at dapibus id, varius quis felis. Mauris tempus purus eget velit convallis sollicitudin.',
        cost: '$14.99',
        imageUrl: 'http://via.placeholder.com/350x150'
      },
      {
        id: 4,
        title: 'Product 4',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ligula arcu, faucibus at dapibus id, varius quis felis. Mauris tempus purus eget velit convallis sollicitudin.',
        cost: '$19.99',
        imageUrl: 'http://via.placeholder.com/350x150'
      },
      {
        id: 5,
        title: 'Product 5',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ligula arcu, faucibus at dapibus id, varius quis felis. Mauris tempus purus eget velit convallis sollicitudin.',
        cost: '$12.99',
        imageUrl: 'http://via.placeholder.com/350x150'
      },
      {
        id: 6,
        title: 'Product 6',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ligula arcu, faucibus at dapibus id, varius quis felis. Mauris tempus purus eget velit convallis sollicitudin.',
        cost: '$9.99',
        imageUrl: 'http://via.placeholder.com/350x150'
      },
      {
        id: 7,
        title: 'Product 7',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ligula arcu, faucibus at dapibus id, varius quis felis. Mauris tempus purus eget velit convallis sollicitudin.',
        cost: '$14.99',
        imageUrl: 'http://via.placeholder.com/350x150'
      },
      {
        id: 8,
        title: 'Product 8',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ligula arcu, faucibus at dapibus id, varius quis felis. Mauris tempus purus eget velit convallis sollicitudin.',
        cost: '$19.99',
        imageUrl: 'http://via.placeholder.com/350x150'
      }
    ]
  }

}
