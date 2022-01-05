import { Component, OnInit } from '@angular/core';

import { AlbumInfo } from '../albuminfo';
import { ProductService } from '../product.service';



@Component({
  selector: 'app-product-tracklisting',
  templateUrl: './product-tracklisting.component.html',
  styleUrls: ['./product-tracklisting.component.css']
})
export class ProductTracklistingComponent implements OnInit {

  albumInfo?: AlbumInfo;

  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
    this._productService.getAlbum(1).subscribe({
      next: (response => this.albumInfo = response)
    })
  }

}
