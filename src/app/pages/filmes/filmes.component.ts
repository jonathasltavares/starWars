import { Component, afterNextRender, afterRender, signal } from '@angular/core';
import { ApiService } from '../../core/services/api.service';
import { MatTable } from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-filmes',
  standalone: true,
  imports: [MatTable, MatTableModule, MatProgressSpinner],
  templateUrl: './filmes.component.html',
  styleUrl: './filmes.component.scss',
})
export class FilmesComponent {
  resultFilms: any = [];
  loading = signal(true);
  colunas: string[] = ['title', 'director', 'producer', 'release_date'];

  displayedColumns: string[] = ['name'];
  dataSource = this.resultFilms;

  constructor(private service: ApiService) {}

  async ngOnInit(): Promise<void> {
    await this.getFilms();
    this.loading.set(false);
  }

  async getFilms() {
    let res = await this.service.getFilms().toPromise();
    this.resultFilms = res?.results;
  }

  formatarData(data: string) {
    const dataObj = new Date(data);
    return dataObj.toLocaleDateString('pt-BR');
  }
}
