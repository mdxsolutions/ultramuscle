import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class ToolService {

    // We save the json file url
    toolsURL: string = "https://utramuscleportal.firebaseio.com/tools.json";

    constructor(
        private http: HttpClient
    ) { }

    // We get all the tools from the json file
    getTools() {
        return this.http.get(this.toolsURL)
            .pipe(
                map((res: any) => {
                    return res;
                })
            )
    }

}
