import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class GoogleDriveProvider {
  data: any = null;

  constructor(public http: Http) {}

  public getSheetData(): Observable<any> {
    const sheetId = '1jS02_K0ORumZsP2KE66uFKWm0N57oYUpVhXj-RSkl7I';
    const url = `https://spreadsheets.google.com/feeds/list/${sheetId}/od6/public/values?alt=json`;

    return this.http.get(url).pipe(
      map((res: any) => {
        // console.log(res.json().feed.entry);
        const data = res.json().feed.entry;

        const returnArray: Array<any> = [];
        if (data && data.length > 0) {
          data.forEach(entry => {
            const obj = {};
            for (const x in entry) {
              if (x.includes('gsx$') && entry[x].$t) {
                obj[x.split('$')[1]] = entry[x]['$t'];
              }
            }
            returnArray.push(obj);
          });
        }
        return returnArray;
      })
    );
  }
}
