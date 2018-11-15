import { Component, Input, NgModule } from '@angular/core';
import axios from 'axios';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var template = "\n<section class=\"resultados-wrapper\">\n\t<div class=\"container-fluid p-0\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-12\">\n\t\t\t\t<h1>{{title}}</h1>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"resultados-table\" *ngFor=\"let date of dates\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-12\">\n\t\t\t\t\t<div class=\"resultados-table_date\">\n\t\t\t\t\t\t<h2>{{date.label}}</h2>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"{{'resultados-table_matches' + (match.isLive ? ' live' : (!match.isLive && !match.hasEnded ? ' not-started' : ''))}}\" *ngFor=\"let match of date.matches\">\n\n\t\t\t\t<div class=\"row no-gutters\" (click)=\"!match.isLive && !match.hasEnded ? onMatchClick(match) : ''\">\n\t\t\t\t\t<!-- Match Teams -->\n\t\t\t\t\t<div class=\"col-md-4 col-8\" >\n\t\t\t\t\t\t<div class=\"{{'team' + (match.home.winner ? ' won' : '')}}\">\n\t\t\t\t\t\t\t<img src=\"{{match.home.img}}\" />\n\t\t\t\t\t\t\t<span>{{match.home.name}}</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"{{'team' + (match.away.winner ? ' won' : '')}}\">\n\t\t\t\t\t\t\t<img src=\"{{match.away.img}}\" />\n\t\t\t\t\t\t\t<span>{{match.away.name}}</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<!-- Match Goals -->\n\t\t\t\t\t<div class=\"col-md-1 col-2 text-center text-md-left\">\n\t\t\t\t\t\t<span class=\"{{'goals' + (match.home.winner ? ' won' : '')}}\">{{match.home.goals}}<sup *ngIf=\"match.home.extragoals\">{{match.home.extragoals}}</sup></span>\n\t\t\t\t\t\t<span class=\"{{'goals' + (match.away.winner ? ' won' : '')}}\">{{match.away.goals}}<sup *ngIf=\"match.away.extragoals\">{{match.away.extragoals}}</sup></span>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<!-- Match Status -->\n\t\t\t\t\t<div class=\"col-md-3 col-2 justify-content-center text-center text-md-left\">\n\t\t\t\t\t\t<span class=\"status\">{{match.status}}</span>\n\t\t\t\t\t\t<span *ngIf=\"!match.isLive && !match.hasEnded && match.place\" class=\"place\">{{match.place}}</span>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<!-- Watch Online -->\n\t\t\t\t\t<div class=\"col-md-3 justify-content-center\">\n\t\t\t\t\t\t<button class=\"cta-watch inverse\" *ngIf=\"match.hasEnded\" (click)=\"onWatch(match)\">\n\t\t\t\t\t\t\t<svg class=\"play-icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"8\" height=\"10\" viewBox=\"0 0 8 10\">\n\t\t\t\t\t\t\t\t<g fill=\"none\">\n\t\t\t\t\t\t\t\t\t<g class=\"play-icon_fill\">\n\t\t\t\t\t\t\t\t\t\t<polygon transform=\"translate(-26 -10)translate(26 10)translate(4 5)rotate(90)translate(-4 -5)\" points=\"4 1 9 9 -1 9\"/>\n\t\t\t\t\t\t\t\t\t</g>\n\t\t\t\t\t\t\t\t</g>\n\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\tRevivelo\n\t\t\t\t\t\t</button>\n\t\t\t\t\t\t<button type=\"button\" class=\"cta-watch\" *ngIf=\"match.isLive\" (click)=\"onWatchLive(match)\">\n\t\t\t\t\t\t\t<svg class=\"play-icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"8\" height=\"10\" viewBox=\"0 0 8 10\">\n\t\t\t\t\t\t\t\t<g fill=\"none\">\n\t\t\t\t\t\t\t\t\t<g class=\"play-icon_fill\">\n\t\t\t\t\t\t\t\t\t\t<polygon transform=\"translate(-26 -10)translate(26 10)translate(4 5)rotate(90)translate(-4 -5)\" points=\"4 1 9 9 -1 9\"/>\n\t\t\t\t\t\t\t\t\t</g>\n\t\t\t\t\t\t\t\t</g>\n\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\tMiralo en vivo\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t\t\n\t\t</div>\n\t</div>\n\n\n\t\n</section>";

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var style = "\n.resultados-wrapper {\n\tfont-family: \"Roboto\", sans-serif;\n\tfont-size: 14px;\n\tfont-weight: 400;\n\tmargin: 50px 0;\n}\n\nh1 {\n\tfont-size: 1.25em;\n\tfont-weight: 500;\n}\n\n.resultados-table {\n\tbox-shadow: 0px 1px 1px 0px rgba(0, 0, 0, .1);;\n\tmargin: 20px 0;\n}\n\n.resultados-table_date {\n\tbackground: #fff;\t\n\tmargin: 2px 0;\n\tpadding: 18px 14px;\n\ttext-transform: uppercase;\n}\n\nh2 {\n\tfont-size: .9em;\n\tfont-weight: 500;\n\tmargin: 0;\n\tpadding: 0;\n}\n\n.resultados-table_matches {\n\tbackground: #fff;\n\tborder-bottom: 1px solid #f7f7f7;\n\tpadding: 8px 14px;\n}\n\n@media (max-width: 768px) {\n\t.resultados-table_matches {\n\t\tpadding: 5px 14px;\n\t}\n}\n\n.resultados-table_matches:last-child {\n\tborder-bottom: 0;\n}\n\n.resultados-table_matches .row > [class*='col']{\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n}\n\n.resultados-table_matches.live {\n\tbackground: rgba(0, 122, 255, .1);\n}\n\n.team {\n\talign-items: center;\n\tdisplay: flex;\n\tfont-size: 1.1em;\n}\n.team:first-child {\n\tmargin: 10px 0 6px;\n}\n.team:last-child {\n\tmargin: 6px 0 10px;\n}\n\n.team.won {\n\tfont-weight: 600;\n}\n\n.team img {\n\tdisplay: inline-block;\n\tmargin: 0 5px;\n\theight: 30px;\n\twidth: 30px;\n\tvertical-align: middle;\n}\n\n\n@media (max-width: 768px) {\n\t.team {\n\t\tfont-size: 1.1em;\n\t}\n\n\t.team img {\n\t\theight: 26px;\n\t\tmargin-left: 0;\n\t\twidth: 26px;\n\t}\n}\n\n.goals {\n\tcolor: #000;\n\tdisplay: block;\n\tfont-size: 1.2em;\n\tfont-weight: 400;\n\tmargin: 6px 0;\n}\n\n@media (max-width: 768px) {\n\t.goals {\n\t\tfont-size: 1.3em;\n\t\tmargin: 10px 0;\n\t}\n}\n\n.goals sup {\n\tfont-size: .6em;\n\tleft: 6px;\n\ttop: -8px;\n}\n\n.goals.won {\n\tfont-weight: 600;\n}\n\n.live .goals {\n\tcolor: #007aff;\n}\n\n\n.status {\n\tcolor: #999;\n\tfont-size: .85em;\n\ttext-transform: uppercase;\n}\n\n@media (max-width: 768px) {\n\t.status {\n\t\tfont-size: .8em;\n\t}\n}\n\n.not-started .status {\n\tcolor: #000;\n}\n\n.live .status {\n\tcolor: #007aff;\n}\n\n.place {\n\tcolor: #999;\n\tmargin-top: 8px;\n}\n\n@media (max-width: 768px) {\n\t.place {\n\t\tdisplay: none;\n\t}\n}\n\n.cta-watch {\n\t-moz-appearance: none;\n\t-webkit-appearance: none;\n\talign-self: flex-end;\n\tbackground: #007aff;\n\tborder: 1px solid #007aff;\n\tborder-radius: 4px;\n\tcolor: #fff;\n\tcursor: pointer;\n\tdisplay: inline-block;\n\tfont-family: \"Roboto\", sans-serif;\n\tfont-size: .75em;\n\tfont-weight: 500;\n\tpadding: 6px 0 4px;\n\ttext-align: center;\n\twidth: 126px;\n\ttext-transform: uppercase;\n}\n\n@media (max-width: 768px) {\n\t.cta-watch {\n\t\talign-self: center;\n\t\tfont-size: .7em;\n\t\tmargin-top: 2px;\n\t\twidth: 108px;\n\t}\n}\n\n.cta-watch:hover {\n\tbackground: #368eee;\n\tborder-color: #368eee;\n}\n\n.cta-watch .play-icon {\n\tdisplay: inline-block;\n\theight: 10px;\n\tmargin-top: -2px;\n\tvertical-align: middle;\n\twidth: 12px;\n}\n\n.cta-watch .play-icon_fill {\n\tfill: #fff;\n}\n\n.cta-watch.inverse {\n\tbackground: transparent;\n\tcolor: #007aff;\n}\n\n.cta-watch.inverse:hover {\n\tborder-color: #368eee;\n\tcolor: #368eee;\n}\n\n.cta-watch.inverse .play-icon_fill {\n\tfill: #007aff;\n}\n";

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FoxResultadosComponent = /** @class */ (function () {
    function FoxResultadosComponent() {
        this.competitionid = '';
        this.lang = 'es';
        this.date = '' + (new Date()).getFullYear() + ((new Date()).getMonth() + 1) + (new Date()).getDate();
        this.max = 0;
        this.type = 'futbol';
        this.country = 'ar';
        this.title = 'Resultados';
        this.dates = [];
    }
    /**
     * @return {?}
     */
    FoxResultadosComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        // Usefull variables
        var /** @type {?} */ _this = this;
        var /** @type {?} */ params = {};
        var /** @type {?} */ sortedRows = {};
        var /** @type {?} */ monthLabels = {
            'es': ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Augosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
            'pt': ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
        };
        var /** @type {?} */ today = parseInt('' + (new Date()).getFullYear() + ((new Date()).getMonth() + 1) + (new Date()).getDate());
        // API Params setup
        if (_this.country)
            params['country-code'] = _this.country;
        if (_this.type)
            params['type'] = _this.type;
        if (_this.date)
            params['dates-array'] = _this.date;
        if (_this.competitionid)
            params['competition-id'] = _this.competitionid;
        axios.get('https://stats.foxsportsla.com/stats/get_results_v2', {
            params: params
        }).then(function (resp) {
            // Sort results and group by date
            resp.data.forEach(function (row) {
                var /** @type {?} */ key = parseInt(row.year + '' + row.month + '' + row.day);
                if (!sortedRows[key])
                    sortedRows[key] = [];
                sortedRows[key].push(row);
            });
            // Prepare data for frontend
            Object.keys(sortedRows).forEach(function (date) {
                var /** @type {?} */ newDate = {
                    label: sortedRows[date][0].day + ' ' + monthLabels[_this.lang][(sortedRows[date][0].month - 1)] + ' ' + sortedRows[date][0].year,
                    matches: []
                };
                sortedRows[date].forEach(function (match) {
                    var /** @type {?} */ status = '';
                    if (match.status === 'final') {
                        status = 'Final';
                    }
                    else {
                        status = match['live-match']['live-minute'] + ' ';
                        status = status + (match['live-match']['total-periods'] === 1 ? 'PT' : 'ST');
                    }
                    var /** @type {?} */ homeTotalGoals = (match['home-score'] ? parseInt(match['home-score']) : 0) + (match['aggregate-home-team-goals'] ? parseInt(match['aggregate-home-team-goals']) : 0);
                    var /** @type {?} */ visitTotalGoals = (match['visiting-score'] ? parseInt(match['visiting-score']) : 0) + (match['aggregate-visiting-team-goals'] ? parseInt(match['aggregate-visiting-team-goals']) : 0);
                    var /** @type {?} */ newMatch = {
                        rawData: match,
                        home: {
                            img: match['home-team']['team-logo-url'],
                            name: match['home-team']['team-name'],
                            goals: match['home-score'],
                            extragoals: match['aggregate-home-team-goals'],
                            winner: homeTotalGoals > visitTotalGoals
                        },
                        away: {
                            img: match['visiting-team']['team-logo-url'],
                            name: match['visiting-team']['team-name'],
                            goals: match['visiting-score'],
                            extragoals: match['aggregate-visiting-team-goals'],
                            winner: homeTotalGoals < visitTotalGoals
                        },
                        hasEnded: match.status === 'final',
                        isLive: match['live-match']['live-minute'] !== 0,
                        status: status,
                        link: 'https://www.google.com.ar',
                        place: match.stadium
                    };
                    newDate.matches.push(newMatch);
                });
                _this.dates.push(newDate);
            });
            // Run parent init if available
            if (_this.oninit)
                _this.oninit(_this.dates);
        }).catch(function (err) {
            if (_this.onerror)
                _this.onerror(err);
        });
    };
    FoxResultadosComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-fox-resultados',
                    template: template + '',
                    styles: [style + '']
                },] },
    ];
    /** @nocollapse */
    FoxResultadosComponent.ctorParameters = function () { return []; };
    FoxResultadosComponent.propDecorators = {
        "competitionid": [{ type: Input },],
        "lang": [{ type: Input },],
        "date": [{ type: Input },],
        "max": [{ type: Input },],
        "type": [{ type: Input },],
        "country": [{ type: Input },],
        "oninit": [{ type: Input },],
        "onerror": [{ type: Input },],
        "onMatchClick": [{ type: Input },],
        "onWatchLive": [{ type: Input },],
        "onWatch": [{ type: Input },],
    };
    return FoxResultadosComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FoxResultadosModule = /** @class */ (function () {
    function FoxResultadosModule() {
    }
    FoxResultadosModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [FoxResultadosComponent],
                    exports: [
                        FoxResultadosComponent
                    ]
                },] },
    ];
    return FoxResultadosModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { FoxResultadosModule, FoxResultadosComponent };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm94LXJlc3VsdGFkb3MuanMubWFwIiwic291cmNlcyI6WyJuZzovL2ZveC1yZXN1bHRhZG9zL2FwcC9tb2R1bGVzL2ZveC1yZXN1bHRhZG9zL2ZveC1yZXN1bHRhZG9zLmNvbXBvbmVudC5odG1sLnRzIiwibmc6Ly9mb3gtcmVzdWx0YWRvcy9hcHAvbW9kdWxlcy9mb3gtcmVzdWx0YWRvcy9mb3gtcmVzdWx0YWRvcy5jb21wb25lbnQuY3NzLnRzIiwibmc6Ly9mb3gtcmVzdWx0YWRvcy9hcHAvbW9kdWxlcy9mb3gtcmVzdWx0YWRvcy9mb3gtcmVzdWx0YWRvcy5jb21wb25lbnQudHMiLCJuZzovL2ZveC1yZXN1bHRhZG9zL2FwcC9tb2R1bGVzL2ZveC1yZXN1bHRhZG9zL2ZveC1yZXN1bHRhZG9zLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBgXG48c2VjdGlvbiBjbGFzcz1cInJlc3VsdGFkb3Mtd3JhcHBlclwiPlxuXHQ8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkIHAtMFwiPlxuXHRcdDxkaXYgY2xhc3M9XCJyb3dcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cblx0XHRcdFx0PGgxPnt7dGl0bGV9fTwvaDE+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblxuXHRcdDxkaXYgY2xhc3M9XCJyZXN1bHRhZG9zLXRhYmxlXCIgKm5nRm9yPVwibGV0IGRhdGUgb2YgZGF0ZXNcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJyb3dcIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC0xMlwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJyZXN1bHRhZG9zLXRhYmxlX2RhdGVcIj5cblx0XHRcdFx0XHRcdDxoMj57e2RhdGUubGFiZWx9fTwvaDI+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdDxkaXYgY2xhc3M9XCJ7eydyZXN1bHRhZG9zLXRhYmxlX21hdGNoZXMnICsgKG1hdGNoLmlzTGl2ZSA/ICcgbGl2ZScgOiAoIW1hdGNoLmlzTGl2ZSAmJiAhbWF0Y2guaGFzRW5kZWQgPyAnIG5vdC1zdGFydGVkJyA6ICcnKSl9fVwiICpuZ0Zvcj1cImxldCBtYXRjaCBvZiBkYXRlLm1hdGNoZXNcIj5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwicm93IG5vLWd1dHRlcnNcIiAoY2xpY2spPVwiIW1hdGNoLmlzTGl2ZSAmJiAhbWF0Y2guaGFzRW5kZWQgPyBvbk1hdGNoQ2xpY2sobWF0Y2gpIDogJydcIj5cblx0XHRcdFx0XHQ8IS0tIE1hdGNoIFRlYW1zIC0tPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtbWQtNCBjb2wtOFwiID5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ7eyd0ZWFtJyArIChtYXRjaC5ob21lLndpbm5lciA/ICcgd29uJyA6ICcnKX19XCI+XG5cdFx0XHRcdFx0XHRcdDxpbWcgc3JjPVwie3ttYXRjaC5ob21lLmltZ319XCIgLz5cblx0XHRcdFx0XHRcdFx0PHNwYW4+e3ttYXRjaC5ob21lLm5hbWV9fTwvc3Bhbj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInt7J3RlYW0nICsgKG1hdGNoLmF3YXkud2lubmVyID8gJyB3b24nIDogJycpfX1cIj5cblx0XHRcdFx0XHRcdFx0PGltZyBzcmM9XCJ7e21hdGNoLmF3YXkuaW1nfX1cIiAvPlxuXHRcdFx0XHRcdFx0XHQ8c3Bhbj57e21hdGNoLmF3YXkubmFtZX19PC9zcGFuPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHQ8IS0tIE1hdGNoIEdvYWxzIC0tPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtbWQtMSBjb2wtMiB0ZXh0LWNlbnRlciB0ZXh0LW1kLWxlZnRcIj5cblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwie3snZ29hbHMnICsgKG1hdGNoLmhvbWUud2lubmVyID8gJyB3b24nIDogJycpfX1cIj57e21hdGNoLmhvbWUuZ29hbHN9fTxzdXAgKm5nSWY9XCJtYXRjaC5ob21lLmV4dHJhZ29hbHNcIj57e21hdGNoLmhvbWUuZXh0cmFnb2Fsc319PC9zdXA+PC9zcGFuPlxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJ7eydnb2FscycgKyAobWF0Y2guYXdheS53aW5uZXIgPyAnIHdvbicgOiAnJyl9fVwiPnt7bWF0Y2guYXdheS5nb2Fsc319PHN1cCAqbmdJZj1cIm1hdGNoLmF3YXkuZXh0cmFnb2Fsc1wiPnt7bWF0Y2guYXdheS5leHRyYWdvYWxzfX08L3N1cD48L3NwYW4+XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHQ8IS0tIE1hdGNoIFN0YXR1cyAtLT5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLW1kLTMgY29sLTIganVzdGlmeS1jb250ZW50LWNlbnRlciB0ZXh0LWNlbnRlciB0ZXh0LW1kLWxlZnRcIj5cblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwic3RhdHVzXCI+e3ttYXRjaC5zdGF0dXN9fTwvc3Bhbj5cblx0XHRcdFx0XHRcdDxzcGFuICpuZ0lmPVwiIW1hdGNoLmlzTGl2ZSAmJiAhbWF0Y2guaGFzRW5kZWQgJiYgbWF0Y2gucGxhY2VcIiBjbGFzcz1cInBsYWNlXCI+e3ttYXRjaC5wbGFjZX19PC9zcGFuPlxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0PCEtLSBXYXRjaCBPbmxpbmUgLS0+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC1tZC0zIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cblx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3M9XCJjdGEtd2F0Y2ggaW52ZXJzZVwiICpuZ0lmPVwibWF0Y2guaGFzRW5kZWRcIiAoY2xpY2spPVwib25XYXRjaChtYXRjaClcIj5cblx0XHRcdFx0XHRcdFx0PHN2ZyBjbGFzcz1cInBsYXktaWNvblwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjhcIiBoZWlnaHQ9XCIxMFwiIHZpZXdCb3g9XCIwIDAgOCAxMFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxnIGZpbGw9XCJub25lXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZyBjbGFzcz1cInBsYXktaWNvbl9maWxsXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxwb2x5Z29uIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMjYgLTEwKXRyYW5zbGF0ZSgyNiAxMCl0cmFuc2xhdGUoNCA1KXJvdGF0ZSg5MCl0cmFuc2xhdGUoLTQgLTUpXCIgcG9pbnRzPVwiNCAxIDkgOSAtMSA5XCIvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0XHRcdFx0PC9zdmc+XG5cdFx0XHRcdFx0XHRcdFJldml2ZWxvXG5cdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY3RhLXdhdGNoXCIgKm5nSWY9XCJtYXRjaC5pc0xpdmVcIiAoY2xpY2spPVwib25XYXRjaExpdmUobWF0Y2gpXCI+XG5cdFx0XHRcdFx0XHRcdDxzdmcgY2xhc3M9XCJwbGF5LWljb25cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCI4XCIgaGVpZ2h0PVwiMTBcIiB2aWV3Qm94PVwiMCAwIDggMTBcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZyBmaWxsPVwibm9uZVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGcgY2xhc3M9XCJwbGF5LWljb25fZmlsbFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8cG9seWdvbiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTI2IC0xMCl0cmFuc2xhdGUoMjYgMTApdHJhbnNsYXRlKDQgNSlyb3RhdGUoOTApdHJhbnNsYXRlKC00IC01KVwiIHBvaW50cz1cIjQgMSA5IDkgLTEgOVwiLz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0XHRcdDwvc3ZnPlxuXHRcdFx0XHRcdFx0XHRNaXJhbG8gZW4gdml2b1xuXHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHQ8L2Rpdj5cblx0XHRcdFxuXHRcdDwvZGl2PlxuXHQ8L2Rpdj5cblxuXG5cdFxuPC9zZWN0aW9uPmBcbiIsImV4cG9ydCBkZWZhdWx0IGBcbi5yZXN1bHRhZG9zLXdyYXBwZXIge1xuXHRmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcblx0Zm9udC1zaXplOiAxNHB4O1xuXHRmb250LXdlaWdodDogNDAwO1xuXHRtYXJnaW46IDUwcHggMDtcbn1cblxuaDEge1xuXHRmb250LXNpemU6IDEuMjVlbTtcblx0Zm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnJlc3VsdGFkb3MtdGFibGUge1xuXHRib3gtc2hhZG93OiAwcHggMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAuMSk7O1xuXHRtYXJnaW46IDIwcHggMDtcbn1cblxuLnJlc3VsdGFkb3MtdGFibGVfZGF0ZSB7XG5cdGJhY2tncm91bmQ6ICNmZmY7XHRcblx0bWFyZ2luOiAycHggMDtcblx0cGFkZGluZzogMThweCAxNHB4O1xuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG5oMiB7XG5cdGZvbnQtc2l6ZTogLjllbTtcblx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0bWFyZ2luOiAwO1xuXHRwYWRkaW5nOiAwO1xufVxuXG4ucmVzdWx0YWRvcy10YWJsZV9tYXRjaGVzIHtcblx0YmFja2dyb3VuZDogI2ZmZjtcblx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmN2Y3Zjc7XG5cdHBhZGRpbmc6IDhweCAxNHB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcblx0LnJlc3VsdGFkb3MtdGFibGVfbWF0Y2hlcyB7XG5cdFx0cGFkZGluZzogNXB4IDE0cHg7XG5cdH1cbn1cblxuLnJlc3VsdGFkb3MtdGFibGVfbWF0Y2hlczpsYXN0LWNoaWxkIHtcblx0Ym9yZGVyLWJvdHRvbTogMDtcbn1cblxuLnJlc3VsdGFkb3MtdGFibGVfbWF0Y2hlcyAucm93ID4gW2NsYXNzKj0nY29sJ117XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnJlc3VsdGFkb3MtdGFibGVfbWF0Y2hlcy5saXZlIHtcblx0YmFja2dyb3VuZDogcmdiYSgwLCAxMjIsIDI1NSwgLjEpO1xufVxuXG4udGVhbSB7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZvbnQtc2l6ZTogMS4xZW07XG59XG4udGVhbTpmaXJzdC1jaGlsZCB7XG5cdG1hcmdpbjogMTBweCAwIDZweDtcbn1cbi50ZWFtOmxhc3QtY2hpbGQge1xuXHRtYXJnaW46IDZweCAwIDEwcHg7XG59XG5cbi50ZWFtLndvbiB7XG5cdGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi50ZWFtIGltZyB7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0bWFyZ2luOiAwIDVweDtcblx0aGVpZ2h0OiAzMHB4O1xuXHR3aWR0aDogMzBweDtcblx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcblx0LnRlYW0ge1xuXHRcdGZvbnQtc2l6ZTogMS4xZW07XG5cdH1cblxuXHQudGVhbSBpbWcge1xuXHRcdGhlaWdodDogMjZweDtcblx0XHRtYXJnaW4tbGVmdDogMDtcblx0XHR3aWR0aDogMjZweDtcblx0fVxufVxuXG4uZ29hbHMge1xuXHRjb2xvcjogIzAwMDtcblx0ZGlzcGxheTogYmxvY2s7XG5cdGZvbnQtc2l6ZTogMS4yZW07XG5cdGZvbnQtd2VpZ2h0OiA0MDA7XG5cdG1hcmdpbjogNnB4IDA7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuXHQuZ29hbHMge1xuXHRcdGZvbnQtc2l6ZTogMS4zZW07XG5cdFx0bWFyZ2luOiAxMHB4IDA7XG5cdH1cbn1cblxuLmdvYWxzIHN1cCB7XG5cdGZvbnQtc2l6ZTogLjZlbTtcblx0bGVmdDogNnB4O1xuXHR0b3A6IC04cHg7XG59XG5cbi5nb2Fscy53b24ge1xuXHRmb250LXdlaWdodDogNjAwO1xufVxuXG4ubGl2ZSAuZ29hbHMge1xuXHRjb2xvcjogIzAwN2FmZjtcbn1cblxuXG4uc3RhdHVzIHtcblx0Y29sb3I6ICM5OTk7XG5cdGZvbnQtc2l6ZTogLjg1ZW07XG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuXHQuc3RhdHVzIHtcblx0XHRmb250LXNpemU6IC44ZW07XG5cdH1cbn1cblxuLm5vdC1zdGFydGVkIC5zdGF0dXMge1xuXHRjb2xvcjogIzAwMDtcbn1cblxuLmxpdmUgLnN0YXR1cyB7XG5cdGNvbG9yOiAjMDA3YWZmO1xufVxuXG4ucGxhY2Uge1xuXHRjb2xvcjogIzk5OTtcblx0bWFyZ2luLXRvcDogOHB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcblx0LnBsYWNlIHtcblx0XHRkaXNwbGF5OiBub25lO1xuXHR9XG59XG5cbi5jdGEtd2F0Y2gge1xuXHQtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG5cdC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcblx0YWxpZ24tc2VsZjogZmxleC1lbmQ7XG5cdGJhY2tncm91bmQ6ICMwMDdhZmY7XG5cdGJvcmRlcjogMXB4IHNvbGlkICMwMDdhZmY7XG5cdGJvcmRlci1yYWRpdXM6IDRweDtcblx0Y29sb3I6ICNmZmY7XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcblx0Zm9udC1zaXplOiAuNzVlbTtcblx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0cGFkZGluZzogNnB4IDAgNHB4O1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdHdpZHRoOiAxMjZweDtcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG5cdC5jdGEtd2F0Y2gge1xuXHRcdGFsaWduLXNlbGY6IGNlbnRlcjtcblx0XHRmb250LXNpemU6IC43ZW07XG5cdFx0bWFyZ2luLXRvcDogMnB4O1xuXHRcdHdpZHRoOiAxMDhweDtcblx0fVxufVxuXG4uY3RhLXdhdGNoOmhvdmVyIHtcblx0YmFja2dyb3VuZDogIzM2OGVlZTtcblx0Ym9yZGVyLWNvbG9yOiAjMzY4ZWVlO1xufVxuXG4uY3RhLXdhdGNoIC5wbGF5LWljb24ge1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdGhlaWdodDogMTBweDtcblx0bWFyZ2luLXRvcDogLTJweDtcblx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcblx0d2lkdGg6IDEycHg7XG59XG5cbi5jdGEtd2F0Y2ggLnBsYXktaWNvbl9maWxsIHtcblx0ZmlsbDogI2ZmZjtcbn1cblxuLmN0YS13YXRjaC5pbnZlcnNlIHtcblx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cdGNvbG9yOiAjMDA3YWZmO1xufVxuXG4uY3RhLXdhdGNoLmludmVyc2U6aG92ZXIge1xuXHRib3JkZXItY29sb3I6ICMzNjhlZWU7XG5cdGNvbG9yOiAjMzY4ZWVlO1xufVxuXG4uY3RhLXdhdGNoLmludmVyc2UgLnBsYXktaWNvbl9maWxsIHtcblx0ZmlsbDogIzAwN2FmZjtcbn1cbmBcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vZm94LXJlc3VsdGFkb3MuY29tcG9uZW50Lmh0bWwnXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9mb3gtcmVzdWx0YWRvcy5jb21wb25lbnQuY3NzJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtZm94LXJlc3VsdGFkb3MnLFxuICB0ZW1wbGF0ZTogdGVtcGxhdGUgKyAnJyxcbiAgc3R5bGVzOiBbc3R5bGUgKyAnJ11cbn0pXG5leHBvcnQgY2xhc3MgRm94UmVzdWx0YWRvc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGNvbXBldGl0aW9uaWQ6IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSBsYW5nOiBzdHJpbmcgPSAnZXMnO1xuICBASW5wdXQoKSBkYXRlOiBzdHJpbmcgPSAnJyArIChuZXcgRGF0ZSgpKS5nZXRGdWxsWWVhcigpICsgKChuZXcgRGF0ZSgpKS5nZXRNb250aCgpICsgMSkgKyAobmV3IERhdGUoKSkuZ2V0RGF0ZSgpO1xuICBASW5wdXQoKSBtYXg6IG51bWJlciA9IDA7XG4gIEBJbnB1dCgpIHR5cGU6IHN0cmluZyA9ICdmdXRib2wnO1xuICBASW5wdXQoKSBjb3VudHJ5OiBzdHJpbmcgPSAnYXInO1xuXG4gIEBJbnB1dCgpIG9uaW5pdDogRnVuY3Rpb247XG4gIEBJbnB1dCgpIG9uZXJyb3I6IEZ1bmN0aW9uO1xuICBASW5wdXQoKSBvbk1hdGNoQ2xpY2s6IEZ1bmN0aW9uO1xuICBASW5wdXQoKSBvbldhdGNoTGl2ZTogRnVuY3Rpb247XG4gIEBJbnB1dCgpIG9uV2F0Y2g6IEZ1bmN0aW9uO1xuXG4gIHRpdGxlID0gJ1Jlc3VsdGFkb3MnO1xuICBkYXRlcyA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICAvLyBVc2VmdWxsIHZhcmlhYmxlc1xuICAgIGNvbnN0IF90aGlzID0gdGhpcztcbiAgICBjb25zdCBwYXJhbXMgPSB7fTtcbiAgICBjb25zdCBzb3J0ZWRSb3dzID0ge307XG4gICAgY29uc3QgbW9udGhMYWJlbHMgPSB7XG4gICAgICAnZXMnOiBbJ0VuZXJvJywnRmVicmVybycsJ01hcnpvJywnQWJyaWwnLCdNYXlvJywnSnVuaW8nLCAnSnVsaW8nLCdBdWdvc3RvJywnU2VwdGllbWJyZScsJ09jdHVicmUnLCdOb3ZpZW1icmUnLCdEaWNpZW1icmUnXSxcbiAgICAgICdwdCc6IFsnSmFuZWlybycsICdGZXZlcmVpcm8nLCAnTWFyw4PCp28nLCAnQWJyaWwnLCAnTWFpbycsICdKdW5obycsICdKdWxobycsICdBZ29zdG8nLCAnU2V0ZW1icm8nLCAnT3V0dWJybycsICdOb3ZlbWJybycsICdEZXplbWJybyddXG4gICAgfTtcbiAgICBjb25zdCB0b2RheSA9IHBhcnNlSW50KCcnICsgKG5ldyBEYXRlKCkpLmdldEZ1bGxZZWFyKCkgKyAoKG5ldyBEYXRlKCkpLmdldE1vbnRoKCkgKyAxKSArIChuZXcgRGF0ZSgpKS5nZXREYXRlKCkpXG5cbiAgICAvLyBBUEkgUGFyYW1zIHNldHVwXG4gICAgaWYgKF90aGlzLmNvdW50cnkpIHBhcmFtc1snY291bnRyeS1jb2RlJ10gPSBfdGhpcy5jb3VudHJ5O1xuICAgIGlmIChfdGhpcy50eXBlKSBwYXJhbXNbJ3R5cGUnXSA9IF90aGlzLnR5cGU7XG4gICAgaWYgKF90aGlzLmRhdGUpIHBhcmFtc1snZGF0ZXMtYXJyYXknXSA9IF90aGlzLmRhdGU7XG4gICAgaWYgKF90aGlzLmNvbXBldGl0aW9uaWQpIHBhcmFtc1snY29tcGV0aXRpb24taWQnXSA9IF90aGlzLmNvbXBldGl0aW9uaWQ7XG5cbiAgICBheGlvcy5nZXQoJ2h0dHBzOi8vc3RhdHMuZm94c3BvcnRzbGEuY29tL3N0YXRzL2dldF9yZXN1bHRzX3YyJywge1xuICAgICAgcGFyYW1zOiBwYXJhbXNcbiAgICB9KS50aGVuKGZ1bmN0aW9uKHJlc3ApIHtcblxuICAgICAgLy8gU29ydCByZXN1bHRzIGFuZCBncm91cCBieSBkYXRlXG4gICAgICByZXNwLmRhdGEuZm9yRWFjaChyb3cgPT4ge1xuICAgICAgICBjb25zdCBrZXkgPSBwYXJzZUludChyb3cueWVhciArICcnICsgcm93Lm1vbnRoICsgJycgKyByb3cuZGF5KTtcbiAgICAgICAgaWYgKCFzb3J0ZWRSb3dzW2tleV0pIHNvcnRlZFJvd3Nba2V5XSA9IFtdXG4gICAgICAgIHNvcnRlZFJvd3Nba2V5XS5wdXNoKHJvdyk7XG4gICAgICB9KTtcblxuICAgICAgLy8gUHJlcGFyZSBkYXRhIGZvciBmcm9udGVuZFxuICAgICAgT2JqZWN0LmtleXMoc29ydGVkUm93cykuZm9yRWFjaChkYXRlID0+IHtcbiAgICAgICAgY29uc3QgbmV3RGF0ZSA9IHtcbiAgICAgICAgICBsYWJlbDogc29ydGVkUm93c1tkYXRlXVswXS5kYXkgKyAnICcgKyBtb250aExhYmVsc1tfdGhpcy5sYW5nXVsoc29ydGVkUm93c1tkYXRlXVswXS5tb250aCAtIDEpXSArICcgJyArIHNvcnRlZFJvd3NbZGF0ZV1bMF0ueWVhcixcbiAgICAgICAgICBtYXRjaGVzOiBbXVxuICAgICAgICB9O1xuICAgICAgICBzb3J0ZWRSb3dzW2RhdGVdLmZvckVhY2gobWF0Y2ggPT4ge1xuICAgICAgICAgIGxldCBzdGF0dXMgPSAnJztcbiAgICAgICAgICBpZiAobWF0Y2guc3RhdHVzID09PSAnZmluYWwnKSB7XG4gICAgICAgICAgICBzdGF0dXMgPSAnRmluYWwnO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdGF0dXMgPSBtYXRjaFsnbGl2ZS1tYXRjaCddWydsaXZlLW1pbnV0ZSddICsgJyAnO1xuICAgICAgICAgICAgc3RhdHVzID0gc3RhdHVzICsgKG1hdGNoWydsaXZlLW1hdGNoJ11bJ3RvdGFsLXBlcmlvZHMnXSA9PT0gMSA/ICdQVCcgOiAnU1QnKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGhvbWVUb3RhbEdvYWxzID0gKG1hdGNoWydob21lLXNjb3JlJ10gPyBwYXJzZUludChtYXRjaFsnaG9tZS1zY29yZSddKSA6IDApICsgKG1hdGNoWydhZ2dyZWdhdGUtaG9tZS10ZWFtLWdvYWxzJ10gPyBwYXJzZUludChtYXRjaFsnYWdncmVnYXRlLWhvbWUtdGVhbS1nb2FscyddKSA6IDApXG4gICAgICAgICAgY29uc3QgdmlzaXRUb3RhbEdvYWxzID0gKG1hdGNoWyd2aXNpdGluZy1zY29yZSddID8gcGFyc2VJbnQobWF0Y2hbJ3Zpc2l0aW5nLXNjb3JlJ10pIDogMCkgKyAobWF0Y2hbJ2FnZ3JlZ2F0ZS12aXNpdGluZy10ZWFtLWdvYWxzJ10gPyBwYXJzZUludChtYXRjaFsnYWdncmVnYXRlLXZpc2l0aW5nLXRlYW0tZ29hbHMnXSkgOiAwKVxuXG4gICAgICAgICAgbGV0IG5ld01hdGNoID0ge1xuICAgICAgICAgICAgcmF3RGF0YTogbWF0Y2gsXG4gICAgICAgICAgICBob21lOiB7XG4gICAgICAgICAgICAgIGltZzogbWF0Y2hbJ2hvbWUtdGVhbSddWyd0ZWFtLWxvZ28tdXJsJ10sXG4gICAgICAgICAgICAgIG5hbWU6IG1hdGNoWydob21lLXRlYW0nXVsndGVhbS1uYW1lJ10sXG4gICAgICAgICAgICAgIGdvYWxzOiBtYXRjaFsnaG9tZS1zY29yZSddLFxuICAgICAgICAgICAgICBleHRyYWdvYWxzOiBtYXRjaFsnYWdncmVnYXRlLWhvbWUtdGVhbS1nb2FscyddLFxuICAgICAgICAgICAgICB3aW5uZXI6IGhvbWVUb3RhbEdvYWxzID4gdmlzaXRUb3RhbEdvYWxzXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYXdheToge1xuICAgICAgICAgICAgICBpbWc6IG1hdGNoWyd2aXNpdGluZy10ZWFtJ11bJ3RlYW0tbG9nby11cmwnXSxcbiAgICAgICAgICAgICAgbmFtZTogbWF0Y2hbJ3Zpc2l0aW5nLXRlYW0nXVsndGVhbS1uYW1lJ10sXG4gICAgICAgICAgICAgIGdvYWxzOiBtYXRjaFsndmlzaXRpbmctc2NvcmUnXSxcbiAgICAgICAgICAgICAgZXh0cmFnb2FsczogbWF0Y2hbJ2FnZ3JlZ2F0ZS12aXNpdGluZy10ZWFtLWdvYWxzJ10sXG4gICAgICAgICAgICAgIHdpbm5lcjogaG9tZVRvdGFsR29hbHMgPCB2aXNpdFRvdGFsR29hbHNcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBoYXNFbmRlZDogbWF0Y2guc3RhdHVzID09PSAnZmluYWwnLFxuICAgICAgICAgICAgaXNMaXZlOiBtYXRjaFsnbGl2ZS1tYXRjaCddWydsaXZlLW1pbnV0ZSddICE9PSAwLFxuICAgICAgICAgICAgc3RhdHVzOiBzdGF0dXMsXG4gICAgICAgICAgICBsaW5rOiAnaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS5hcicsXG4gICAgICAgICAgICBwbGFjZTogbWF0Y2guc3RhZGl1bVxuICAgICAgICAgIH07XG4gICAgICAgICAgbmV3RGF0ZS5tYXRjaGVzLnB1c2gobmV3TWF0Y2gpO1xuICAgICAgICB9KVxuXG4gICAgICAgIF90aGlzLmRhdGVzLnB1c2gobmV3RGF0ZSk7XG4gICAgICB9KTtcblxuICAgICAgLy8gUnVuIHBhcmVudCBpbml0IGlmIGF2YWlsYWJsZVxuICAgICAgaWYgKF90aGlzLm9uaW5pdCkgX3RoaXMub25pbml0KF90aGlzLmRhdGVzKTtcbiAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgaWYgKF90aGlzLm9uZXJyb3IpIF90aGlzLm9uZXJyb3IoZXJyKTtcbiAgICB9KVxuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm94UmVzdWx0YWRvc0NvbXBvbmVudCB9IGZyb20gJy4vZm94LXJlc3VsdGFkb3MuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtGb3hSZXN1bHRhZG9zQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1xuICAgIEZveFJlc3VsdGFkb3NDb21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBGb3hSZXN1bHRhZG9zTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsZUFBZSxneUdBNkVKLENB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