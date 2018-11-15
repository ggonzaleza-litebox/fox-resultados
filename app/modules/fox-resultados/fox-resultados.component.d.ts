import { OnInit } from '@angular/core';
export declare class FoxResultadosComponent implements OnInit {
    competitionid: string;
    lang: string;
    date: string;
    max: number;
    type: string;
    country: string;
    oninit: Function;
    onerror: Function;
    onMatchClick: Function;
    onWatchLive: Function;
    onWatch: Function;
    title: string;
    dates: any[];
    constructor();
    ngOnInit(): void;
}
