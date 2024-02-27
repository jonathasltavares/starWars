import { Component, signal } from '@angular/core';
import { ApiService } from '../../core/services/api.service';
import { MatTable } from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MatFormField } from '@angular/material/form-field';
import { MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { filmes } from '../../shared/models/interface';

@Component({
  selector: 'app-filmes',
  standalone: true,
  imports: [
    MatTable,
    MatTableModule,
    MatProgressSpinner,
    MatFormField,
    MatLabel,
    ReactiveFormsModule,
    MatInputModule,
  ],
  templateUrl: './filmes.component.html',
  styleUrl: './filmes.component.scss',
})
export class FilmesComponent {
  resultFilms: any = [];
  films: any = [];
  filterForm!: FormGroup;
  loading = signal(false);
  colunas: string[] = ['title', 'director', 'producer', 'release_date'];

  displayedColumns: string[] = ['name'];
  dataSource = this.resultFilms;

  constructor(private service: ApiService) {
    this.filterForm = new FormGroup({
      title: new FormControl(''),
    });
  }

  ngOnInit() {
    this.getFilms();
  }

  getFilms() {
    this.loading.set(true);
    this.service.getFilms().subscribe((res) => {
      this.resultFilms = res?.results;
      this.loading.set(false);
      this.films = this.resultFilms;
    });
  }

  filterFilms(event: Event) {
    const target = event.target as HTMLInputElement;
    this.films = this.resultFilms.filter((item: filmes) =>
      item.title.toLowerCase().includes(target.value.toLowerCase())
    );
  }

  formatarData(data: string) {
    const dataObj = new Date(data);
    return dataObj.toLocaleDateString('pt-BR');
  }
}
