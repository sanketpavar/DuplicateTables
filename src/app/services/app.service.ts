import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  // Implement your API endpoint here
  getMockData(): Observable<any[]> {
    // Return an array of mock data
    const mockData = [
      { name: 'John', duplicates: 10 },
      { name: 'Jane', duplicates: 8 },
      { name: 'John', duplicates: 2 },
      { name: 'Mike', duplicates: 1 },
      { name: 'Jane', duplicates: 6 },
      { name: 'Mary', duplicates: 12 },
    ];

    // Use the "of" operator to return an Observable of the mock data
    return of(mockData);
  }

  getExternalData(): Observable<any[]> {
    // Replace "api-url" with the URL of your external API
    return this.http.get<any[]>('api-url');
  }
}
