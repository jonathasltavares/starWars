import { Component, signal } from '@angular/core';
import { ApiService } from '../../core/services/api.service';
import { MatTable } from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MatFormField } from '@angular/material/form-field';
import { MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Nave } from '../../shared/models/interface';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-nave',
  standalone: true,
  imports: [
    MatProgressSpinner,
    MatTable,
    MatInputModule,
    MatTableModule,
    MatFormField,
    MatLabel,
    ReactiveFormsModule,
  ],
  templateUrl: './nave.component.html',
  styleUrl: './nave.component.scss',
})
export class NaveComponent {
  resultNaves: any = [];
  naves: any = [];
  loading = signal(false);
  filterForm!: FormGroup;
  colunas: string[] = ['name', 'model', 'starship class', 'crew', 'passengers'];

  displayedColumns: string[] = ['name'];
  dataSource = this.resultNaves;
  constructor(private service: ApiService) {
    this.filterForm = new FormGroup({
      title: new FormControl(''),
    });
  }

  ngOnInit() {
    this.getNaves();
  }

  getNaves() {
    this.loading.set(true);
    this.service.getNaves().subscribe((res) => {
      this.resultNaves = res?.results;
      this.naves = this.resultNaves;
      this.loading.set(false);
    });
  }

  filterNaves(event: Event) {
    const target = event.target as HTMLInputElement;
    this.naves = this.resultNaves.filter((item: Nave) =>
      item.name.toLowerCase().includes(target.value.toLowerCase())
    );
  }
}
