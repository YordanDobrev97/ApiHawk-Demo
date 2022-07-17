import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { URL } from "../constants/apiUrl";
import { AUTH_TOKEN } from "../constants/authToken";

@Injectable()
export class UserService {
    httpClient: HttpClient;
    headers = new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": `Bearer ${AUTH_TOKEN}`
    });
    requestOptions = { headers: this.headers }

    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient;
    }

    getAll(): Observable<any> {
        return this.httpClient.get(`${URL}?page=1`, this.requestOptions);
    }

    getById(id: number): Observable<any> {
        return this.httpClient.get(`${URL}/${id}`, this.requestOptions);
    }
}