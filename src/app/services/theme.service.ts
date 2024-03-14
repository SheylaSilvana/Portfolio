import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private colorSubject = new BehaviorSubject<string>('default-color');

  // Observable para componentes se inscreverem
  public color$ = this.colorSubject.asObservable();

  // Método para alterar a cor
  public setColor(color: string): void {
    this.colorSubject.next(color);
  }
}
