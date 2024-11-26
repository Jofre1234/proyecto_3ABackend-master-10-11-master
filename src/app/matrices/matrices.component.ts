import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-matrices',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './matrices.component.html',
  styleUrls: ['./matrices.component.scss'],
})
export class MatricesComponent implements OnInit {
  matrices: { size: number; cells: number[] }[] = [];

  ngOnInit() {
    this.generateMatrices([3, 4, 5, 6]);
  }

  generateMatrices(sizes: number[]) {
    this.matrices = sizes.map((size) => ({
      size,
      cells: Array.from({ length: size * size }, (_, i) => i + 1),
    }));
  }
}