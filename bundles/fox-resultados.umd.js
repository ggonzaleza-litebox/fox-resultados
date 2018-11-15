(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('axios'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('fox-resultados', ['exports', '@angular/core', 'axios', '@angular/common'], factory) :
    (factory((global['fox-resultados'] = {}),global.ng.core,global.axios,global.ng.common));
}(this, (function (exports,core,axios,common) { 'use strict';

    axios = axios && axios.hasOwnProperty('default') ? axios['default'] : axios;

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
            { type: core.Component, args: [{
                        selector: 'app-fox-resultados',
                        template: template + '',
                        styles: [style + '']
                    },] },
        ];
        /** @nocollapse */
        FoxResultadosComponent.ctorParameters = function () { return []; };
        FoxResultadosComponent.propDecorators = {
            "competitionid": [{ type: core.Input },],
            "lang": [{ type: core.Input },],
            "date": [{ type: core.Input },],
            "max": [{ type: core.Input },],
            "type": [{ type: core.Input },],
            "country": [{ type: core.Input },],
            "oninit": [{ type: core.Input },],
            "onerror": [{ type: core.Input },],
            "onMatchClick": [{ type: core.Input },],
            "onWatchLive": [{ type: core.Input },],
            "onWatch": [{ type: core.Input },],
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
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
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

    exports.FoxResultadosModule = FoxResultadosModule;
    exports.FoxResultadosComponent = FoxResultadosComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm94LXJlc3VsdGFkb3MudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9mb3gtcmVzdWx0YWRvcy9hcHAvbW9kdWxlcy9mb3gtcmVzdWx0YWRvcy9mb3gtcmVzdWx0YWRvcy5jb21wb25lbnQuaHRtbC50cyIsIm5nOi8vZm94LXJlc3VsdGFkb3MvYXBwL21vZHVsZXMvZm94LXJlc3VsdGFkb3MvZm94LXJlc3VsdGFkb3MuY29tcG9uZW50LmNzcy50cyIsIm5nOi8vZm94LXJlc3VsdGFkb3MvYXBwL21vZHVsZXMvZm94LXJlc3VsdGFkb3MvZm94LXJlc3VsdGFkb3MuY29tcG9uZW50LnRzIiwibmc6Ly9mb3gtcmVzdWx0YWRvcy9hcHAvbW9kdWxlcy9mb3gtcmVzdWx0YWRvcy9mb3gtcmVzdWx0YWRvcy5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgYFxuPHNlY3Rpb24gY2xhc3M9XCJyZXN1bHRhZG9zLXdyYXBwZXJcIj5cblx0PGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZCBwLTBcIj5cblx0XHQ8ZGl2IGNsYXNzPVwicm93XCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XG5cdFx0XHRcdDxoMT57e3RpdGxlfX08L2gxPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cblx0XHQ8ZGl2IGNsYXNzPVwicmVzdWx0YWRvcy10YWJsZVwiICpuZ0Zvcj1cImxldCBkYXRlIG9mIGRhdGVzXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwicm93XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwicmVzdWx0YWRvcy10YWJsZV9kYXRlXCI+XG5cdFx0XHRcdFx0XHQ8aDI+e3tkYXRlLmxhYmVsfX08L2gyPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXG5cdFx0XHQ8ZGl2IGNsYXNzPVwie3sncmVzdWx0YWRvcy10YWJsZV9tYXRjaGVzJyArIChtYXRjaC5pc0xpdmUgPyAnIGxpdmUnIDogKCFtYXRjaC5pc0xpdmUgJiYgIW1hdGNoLmhhc0VuZGVkID8gJyBub3Qtc3RhcnRlZCcgOiAnJykpfX1cIiAqbmdGb3I9XCJsZXQgbWF0Y2ggb2YgZGF0ZS5tYXRjaGVzXCI+XG5cblx0XHRcdFx0PGRpdiBjbGFzcz1cInJvdyBuby1ndXR0ZXJzXCIgKGNsaWNrKT1cIiFtYXRjaC5pc0xpdmUgJiYgIW1hdGNoLmhhc0VuZGVkID8gb25NYXRjaENsaWNrKG1hdGNoKSA6ICcnXCI+XG5cdFx0XHRcdFx0PCEtLSBNYXRjaCBUZWFtcyAtLT5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLW1kLTQgY29sLThcIiA+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwie3sndGVhbScgKyAobWF0Y2guaG9tZS53aW5uZXIgPyAnIHdvbicgOiAnJyl9fVwiPlxuXHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cInt7bWF0Y2guaG9tZS5pbWd9fVwiIC8+XG5cdFx0XHRcdFx0XHRcdDxzcGFuPnt7bWF0Y2guaG9tZS5uYW1lfX08L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ7eyd0ZWFtJyArIChtYXRjaC5hd2F5Lndpbm5lciA/ICcgd29uJyA6ICcnKX19XCI+XG5cdFx0XHRcdFx0XHRcdDxpbWcgc3JjPVwie3ttYXRjaC5hd2F5LmltZ319XCIgLz5cblx0XHRcdFx0XHRcdFx0PHNwYW4+e3ttYXRjaC5hd2F5Lm5hbWV9fTwvc3Bhbj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0PCEtLSBNYXRjaCBHb2FscyAtLT5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLW1kLTEgY29sLTIgdGV4dC1jZW50ZXIgdGV4dC1tZC1sZWZ0XCI+XG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cInt7J2dvYWxzJyArIChtYXRjaC5ob21lLndpbm5lciA/ICcgd29uJyA6ICcnKX19XCI+e3ttYXRjaC5ob21lLmdvYWxzfX08c3VwICpuZ0lmPVwibWF0Y2guaG9tZS5leHRyYWdvYWxzXCI+e3ttYXRjaC5ob21lLmV4dHJhZ29hbHN9fTwvc3VwPjwvc3Bhbj5cblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwie3snZ29hbHMnICsgKG1hdGNoLmF3YXkud2lubmVyID8gJyB3b24nIDogJycpfX1cIj57e21hdGNoLmF3YXkuZ29hbHN9fTxzdXAgKm5nSWY9XCJtYXRjaC5hd2F5LmV4dHJhZ29hbHNcIj57e21hdGNoLmF3YXkuZXh0cmFnb2Fsc319PC9zdXA+PC9zcGFuPlxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0PCEtLSBNYXRjaCBTdGF0dXMgLS0+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC1tZC0zIGNvbC0yIGp1c3RpZnktY29udGVudC1jZW50ZXIgdGV4dC1jZW50ZXIgdGV4dC1tZC1sZWZ0XCI+XG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cInN0YXR1c1wiPnt7bWF0Y2guc3RhdHVzfX08L3NwYW4+XG5cdFx0XHRcdFx0XHQ8c3BhbiAqbmdJZj1cIiFtYXRjaC5pc0xpdmUgJiYgIW1hdGNoLmhhc0VuZGVkICYmIG1hdGNoLnBsYWNlXCIgY2xhc3M9XCJwbGFjZVwiPnt7bWF0Y2gucGxhY2V9fTwvc3Bhbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdDwhLS0gV2F0Y2ggT25saW5lIC0tPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtbWQtMyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG5cdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVwiY3RhLXdhdGNoIGludmVyc2VcIiAqbmdJZj1cIm1hdGNoLmhhc0VuZGVkXCIgKGNsaWNrKT1cIm9uV2F0Y2gobWF0Y2gpXCI+XG5cdFx0XHRcdFx0XHRcdDxzdmcgY2xhc3M9XCJwbGF5LWljb25cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCI4XCIgaGVpZ2h0PVwiMTBcIiB2aWV3Qm94PVwiMCAwIDggMTBcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZyBmaWxsPVwibm9uZVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGcgY2xhc3M9XCJwbGF5LWljb25fZmlsbFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8cG9seWdvbiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTI2IC0xMCl0cmFuc2xhdGUoMjYgMTApdHJhbnNsYXRlKDQgNSlyb3RhdGUoOTApdHJhbnNsYXRlKC00IC01KVwiIHBvaW50cz1cIjQgMSA5IDkgLTEgOVwiLz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0XHRcdDwvc3ZnPlxuXHRcdFx0XHRcdFx0XHRSZXZpdmVsb1xuXHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImN0YS13YXRjaFwiICpuZ0lmPVwibWF0Y2guaXNMaXZlXCIgKGNsaWNrKT1cIm9uV2F0Y2hMaXZlKG1hdGNoKVwiPlxuXHRcdFx0XHRcdFx0XHQ8c3ZnIGNsYXNzPVwicGxheS1pY29uXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiOFwiIGhlaWdodD1cIjEwXCIgdmlld0JveD1cIjAgMCA4IDEwXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGcgZmlsbD1cIm5vbmVcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxnIGNsYXNzPVwicGxheS1pY29uX2ZpbGxcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHBvbHlnb24gdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0yNiAtMTApdHJhbnNsYXRlKDI2IDEwKXRyYW5zbGF0ZSg0IDUpcm90YXRlKDkwKXRyYW5zbGF0ZSgtNCAtNSlcIiBwb2ludHM9XCI0IDEgOSA5IC0xIDlcIi8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdFx0XHQ8L3N2Zz5cblx0XHRcdFx0XHRcdFx0TWlyYWxvIGVuIHZpdm9cblx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0PC9kaXY+XG5cdFx0XHRcblx0XHQ8L2Rpdj5cblx0PC9kaXY+XG5cblxuXHRcbjwvc2VjdGlvbj5gXG4iLCJleHBvcnQgZGVmYXVsdCBgXG4ucmVzdWx0YWRvcy13cmFwcGVyIHtcblx0Zm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG5cdGZvbnQtc2l6ZTogMTRweDtcblx0Zm9udC13ZWlnaHQ6IDQwMDtcblx0bWFyZ2luOiA1MHB4IDA7XG59XG5cbmgxIHtcblx0Zm9udC1zaXplOiAxLjI1ZW07XG5cdGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5yZXN1bHRhZG9zLXRhYmxlIHtcblx0Ym94LXNoYWRvdzogMHB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgLjEpOztcblx0bWFyZ2luOiAyMHB4IDA7XG59XG5cbi5yZXN1bHRhZG9zLXRhYmxlX2RhdGUge1xuXHRiYWNrZ3JvdW5kOiAjZmZmO1x0XG5cdG1hcmdpbjogMnB4IDA7XG5cdHBhZGRpbmc6IDE4cHggMTRweDtcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuaDIge1xuXHRmb250LXNpemU6IC45ZW07XG5cdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdG1hcmdpbjogMDtcblx0cGFkZGluZzogMDtcbn1cblxuLnJlc3VsdGFkb3MtdGFibGVfbWF0Y2hlcyB7XG5cdGJhY2tncm91bmQ6ICNmZmY7XG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjdmN2Y3O1xuXHRwYWRkaW5nOiA4cHggMTRweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG5cdC5yZXN1bHRhZG9zLXRhYmxlX21hdGNoZXMge1xuXHRcdHBhZGRpbmc6IDVweCAxNHB4O1xuXHR9XG59XG5cbi5yZXN1bHRhZG9zLXRhYmxlX21hdGNoZXM6bGFzdC1jaGlsZCB7XG5cdGJvcmRlci1ib3R0b206IDA7XG59XG5cbi5yZXN1bHRhZG9zLXRhYmxlX21hdGNoZXMgLnJvdyA+IFtjbGFzcyo9J2NvbCdde1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5yZXN1bHRhZG9zLXRhYmxlX21hdGNoZXMubGl2ZSB7XG5cdGJhY2tncm91bmQ6IHJnYmEoMCwgMTIyLCAyNTUsIC4xKTtcbn1cblxuLnRlYW0ge1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmb250LXNpemU6IDEuMWVtO1xufVxuLnRlYW06Zmlyc3QtY2hpbGQge1xuXHRtYXJnaW46IDEwcHggMCA2cHg7XG59XG4udGVhbTpsYXN0LWNoaWxkIHtcblx0bWFyZ2luOiA2cHggMCAxMHB4O1xufVxuXG4udGVhbS53b24ge1xuXHRmb250LXdlaWdodDogNjAwO1xufVxuXG4udGVhbSBpbWcge1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdG1hcmdpbjogMCA1cHg7XG5cdGhlaWdodDogMzBweDtcblx0d2lkdGg6IDMwcHg7XG5cdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG5cdC50ZWFtIHtcblx0XHRmb250LXNpemU6IDEuMWVtO1xuXHR9XG5cblx0LnRlYW0gaW1nIHtcblx0XHRoZWlnaHQ6IDI2cHg7XG5cdFx0bWFyZ2luLWxlZnQ6IDA7XG5cdFx0d2lkdGg6IDI2cHg7XG5cdH1cbn1cblxuLmdvYWxzIHtcblx0Y29sb3I6ICMwMDA7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRmb250LXNpemU6IDEuMmVtO1xuXHRmb250LXdlaWdodDogNDAwO1xuXHRtYXJnaW46IDZweCAwO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcblx0LmdvYWxzIHtcblx0XHRmb250LXNpemU6IDEuM2VtO1xuXHRcdG1hcmdpbjogMTBweCAwO1xuXHR9XG59XG5cbi5nb2FscyBzdXAge1xuXHRmb250LXNpemU6IC42ZW07XG5cdGxlZnQ6IDZweDtcblx0dG9wOiAtOHB4O1xufVxuXG4uZ29hbHMud29uIHtcblx0Zm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmxpdmUgLmdvYWxzIHtcblx0Y29sb3I6ICMwMDdhZmY7XG59XG5cblxuLnN0YXR1cyB7XG5cdGNvbG9yOiAjOTk5O1xuXHRmb250LXNpemU6IC44NWVtO1xuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcblx0LnN0YXR1cyB7XG5cdFx0Zm9udC1zaXplOiAuOGVtO1xuXHR9XG59XG5cbi5ub3Qtc3RhcnRlZCAuc3RhdHVzIHtcblx0Y29sb3I6ICMwMDA7XG59XG5cbi5saXZlIC5zdGF0dXMge1xuXHRjb2xvcjogIzAwN2FmZjtcbn1cblxuLnBsYWNlIHtcblx0Y29sb3I6ICM5OTk7XG5cdG1hcmdpbi10b3A6IDhweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG5cdC5wbGFjZSB7XG5cdFx0ZGlzcGxheTogbm9uZTtcblx0fVxufVxuXG4uY3RhLXdhdGNoIHtcblx0LW1vei1hcHBlYXJhbmNlOiBub25lO1xuXHQtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG5cdGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuXHRiYWNrZ3JvdW5kOiAjMDA3YWZmO1xuXHRib3JkZXI6IDFweCBzb2xpZCAjMDA3YWZmO1xuXHRib3JkZXItcmFkaXVzOiA0cHg7XG5cdGNvbG9yOiAjZmZmO1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0Zm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG5cdGZvbnQtc2l6ZTogLjc1ZW07XG5cdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdHBhZGRpbmc6IDZweCAwIDRweDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHR3aWR0aDogMTI2cHg7XG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuXHQuY3RhLXdhdGNoIHtcblx0XHRhbGlnbi1zZWxmOiBjZW50ZXI7XG5cdFx0Zm9udC1zaXplOiAuN2VtO1xuXHRcdG1hcmdpbi10b3A6IDJweDtcblx0XHR3aWR0aDogMTA4cHg7XG5cdH1cbn1cblxuLmN0YS13YXRjaDpob3ZlciB7XG5cdGJhY2tncm91bmQ6ICMzNjhlZWU7XG5cdGJvcmRlci1jb2xvcjogIzM2OGVlZTtcbn1cblxuLmN0YS13YXRjaCAucGxheS1pY29uIHtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRoZWlnaHQ6IDEwcHg7XG5cdG1hcmdpbi10b3A6IC0ycHg7XG5cdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cdHdpZHRoOiAxMnB4O1xufVxuXG4uY3RhLXdhdGNoIC5wbGF5LWljb25fZmlsbCB7XG5cdGZpbGw6ICNmZmY7XG59XG5cbi5jdGEtd2F0Y2guaW52ZXJzZSB7XG5cdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXHRjb2xvcjogIzAwN2FmZjtcbn1cblxuLmN0YS13YXRjaC5pbnZlcnNlOmhvdmVyIHtcblx0Ym9yZGVyLWNvbG9yOiAjMzY4ZWVlO1xuXHRjb2xvcjogIzM2OGVlZTtcbn1cblxuLmN0YS13YXRjaC5pbnZlcnNlIC5wbGF5LWljb25fZmlsbCB7XG5cdGZpbGw6ICMwMDdhZmY7XG59XG5gXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2ZveC1yZXN1bHRhZG9zLmNvbXBvbmVudC5odG1sJ1xuaW1wb3J0IHN0eWxlIGZyb20gJy4vZm94LXJlc3VsdGFkb3MuY29tcG9uZW50LmNzcydcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWZveC1yZXN1bHRhZG9zJyxcbiAgdGVtcGxhdGU6IHRlbXBsYXRlICsgJycsXG4gIHN0eWxlczogW3N0eWxlICsgJyddXG59KVxuZXhwb3J0IGNsYXNzIEZveFJlc3VsdGFkb3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBjb21wZXRpdGlvbmlkOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgbGFuZzogc3RyaW5nID0gJ2VzJztcbiAgQElucHV0KCkgZGF0ZTogc3RyaW5nID0gJycgKyAobmV3IERhdGUoKSkuZ2V0RnVsbFllYXIoKSArICgobmV3IERhdGUoKSkuZ2V0TW9udGgoKSArIDEpICsgKG5ldyBEYXRlKCkpLmdldERhdGUoKTtcbiAgQElucHV0KCkgbWF4OiBudW1iZXIgPSAwO1xuICBASW5wdXQoKSB0eXBlOiBzdHJpbmcgPSAnZnV0Ym9sJztcbiAgQElucHV0KCkgY291bnRyeTogc3RyaW5nID0gJ2FyJztcblxuICBASW5wdXQoKSBvbmluaXQ6IEZ1bmN0aW9uO1xuICBASW5wdXQoKSBvbmVycm9yOiBGdW5jdGlvbjtcbiAgQElucHV0KCkgb25NYXRjaENsaWNrOiBGdW5jdGlvbjtcbiAgQElucHV0KCkgb25XYXRjaExpdmU6IEZ1bmN0aW9uO1xuICBASW5wdXQoKSBvbldhdGNoOiBGdW5jdGlvbjtcblxuICB0aXRsZSA9ICdSZXN1bHRhZG9zJztcbiAgZGF0ZXMgPSBbXTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLy8gVXNlZnVsbCB2YXJpYWJsZXNcbiAgICBjb25zdCBfdGhpcyA9IHRoaXM7XG4gICAgY29uc3QgcGFyYW1zID0ge307XG4gICAgY29uc3Qgc29ydGVkUm93cyA9IHt9O1xuICAgIGNvbnN0IG1vbnRoTGFiZWxzID0ge1xuICAgICAgJ2VzJzogWydFbmVybycsJ0ZlYnJlcm8nLCdNYXJ6bycsJ0FicmlsJywnTWF5bycsJ0p1bmlvJywgJ0p1bGlvJywnQXVnb3N0bycsJ1NlcHRpZW1icmUnLCdPY3R1YnJlJywnTm92aWVtYnJlJywnRGljaWVtYnJlJ10sXG4gICAgICAncHQnOiBbJ0phbmVpcm8nLCAnRmV2ZXJlaXJvJywgJ01hcsODwqdvJywgJ0FicmlsJywgJ01haW8nLCAnSnVuaG8nLCAnSnVsaG8nLCAnQWdvc3RvJywgJ1NldGVtYnJvJywgJ091dHVicm8nLCAnTm92ZW1icm8nLCAnRGV6ZW1icm8nXVxuICAgIH07XG4gICAgY29uc3QgdG9kYXkgPSBwYXJzZUludCgnJyArIChuZXcgRGF0ZSgpKS5nZXRGdWxsWWVhcigpICsgKChuZXcgRGF0ZSgpKS5nZXRNb250aCgpICsgMSkgKyAobmV3IERhdGUoKSkuZ2V0RGF0ZSgpKVxuXG4gICAgLy8gQVBJIFBhcmFtcyBzZXR1cFxuICAgIGlmIChfdGhpcy5jb3VudHJ5KSBwYXJhbXNbJ2NvdW50cnktY29kZSddID0gX3RoaXMuY291bnRyeTtcbiAgICBpZiAoX3RoaXMudHlwZSkgcGFyYW1zWyd0eXBlJ10gPSBfdGhpcy50eXBlO1xuICAgIGlmIChfdGhpcy5kYXRlKSBwYXJhbXNbJ2RhdGVzLWFycmF5J10gPSBfdGhpcy5kYXRlO1xuICAgIGlmIChfdGhpcy5jb21wZXRpdGlvbmlkKSBwYXJhbXNbJ2NvbXBldGl0aW9uLWlkJ10gPSBfdGhpcy5jb21wZXRpdGlvbmlkO1xuXG4gICAgYXhpb3MuZ2V0KCdodHRwczovL3N0YXRzLmZveHNwb3J0c2xhLmNvbS9zdGF0cy9nZXRfcmVzdWx0c192MicsIHtcbiAgICAgIHBhcmFtczogcGFyYW1zXG4gICAgfSkudGhlbihmdW5jdGlvbihyZXNwKSB7XG5cbiAgICAgIC8vIFNvcnQgcmVzdWx0cyBhbmQgZ3JvdXAgYnkgZGF0ZVxuICAgICAgcmVzcC5kYXRhLmZvckVhY2gocm93ID0+IHtcbiAgICAgICAgY29uc3Qga2V5ID0gcGFyc2VJbnQocm93LnllYXIgKyAnJyArIHJvdy5tb250aCArICcnICsgcm93LmRheSk7XG4gICAgICAgIGlmICghc29ydGVkUm93c1trZXldKSBzb3J0ZWRSb3dzW2tleV0gPSBbXVxuICAgICAgICBzb3J0ZWRSb3dzW2tleV0ucHVzaChyb3cpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIFByZXBhcmUgZGF0YSBmb3IgZnJvbnRlbmRcbiAgICAgIE9iamVjdC5rZXlzKHNvcnRlZFJvd3MpLmZvckVhY2goZGF0ZSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0RhdGUgPSB7XG4gICAgICAgICAgbGFiZWw6IHNvcnRlZFJvd3NbZGF0ZV1bMF0uZGF5ICsgJyAnICsgbW9udGhMYWJlbHNbX3RoaXMubGFuZ11bKHNvcnRlZFJvd3NbZGF0ZV1bMF0ubW9udGggLSAxKV0gKyAnICcgKyBzb3J0ZWRSb3dzW2RhdGVdWzBdLnllYXIsXG4gICAgICAgICAgbWF0Y2hlczogW11cbiAgICAgICAgfTtcbiAgICAgICAgc29ydGVkUm93c1tkYXRlXS5mb3JFYWNoKG1hdGNoID0+IHtcbiAgICAgICAgICBsZXQgc3RhdHVzID0gJyc7XG4gICAgICAgICAgaWYgKG1hdGNoLnN0YXR1cyA9PT0gJ2ZpbmFsJykge1xuICAgICAgICAgICAgc3RhdHVzID0gJ0ZpbmFsJztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RhdHVzID0gbWF0Y2hbJ2xpdmUtbWF0Y2gnXVsnbGl2ZS1taW51dGUnXSArICcgJztcbiAgICAgICAgICAgIHN0YXR1cyA9IHN0YXR1cyArIChtYXRjaFsnbGl2ZS1tYXRjaCddWyd0b3RhbC1wZXJpb2RzJ10gPT09IDEgPyAnUFQnIDogJ1NUJylcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBob21lVG90YWxHb2FscyA9IChtYXRjaFsnaG9tZS1zY29yZSddID8gcGFyc2VJbnQobWF0Y2hbJ2hvbWUtc2NvcmUnXSkgOiAwKSArIChtYXRjaFsnYWdncmVnYXRlLWhvbWUtdGVhbS1nb2FscyddID8gcGFyc2VJbnQobWF0Y2hbJ2FnZ3JlZ2F0ZS1ob21lLXRlYW0tZ29hbHMnXSkgOiAwKVxuICAgICAgICAgIGNvbnN0IHZpc2l0VG90YWxHb2FscyA9IChtYXRjaFsndmlzaXRpbmctc2NvcmUnXSA/IHBhcnNlSW50KG1hdGNoWyd2aXNpdGluZy1zY29yZSddKSA6IDApICsgKG1hdGNoWydhZ2dyZWdhdGUtdmlzaXRpbmctdGVhbS1nb2FscyddID8gcGFyc2VJbnQobWF0Y2hbJ2FnZ3JlZ2F0ZS12aXNpdGluZy10ZWFtLWdvYWxzJ10pIDogMClcblxuICAgICAgICAgIGxldCBuZXdNYXRjaCA9IHtcbiAgICAgICAgICAgIHJhd0RhdGE6IG1hdGNoLFxuICAgICAgICAgICAgaG9tZToge1xuICAgICAgICAgICAgICBpbWc6IG1hdGNoWydob21lLXRlYW0nXVsndGVhbS1sb2dvLXVybCddLFxuICAgICAgICAgICAgICBuYW1lOiBtYXRjaFsnaG9tZS10ZWFtJ11bJ3RlYW0tbmFtZSddLFxuICAgICAgICAgICAgICBnb2FsczogbWF0Y2hbJ2hvbWUtc2NvcmUnXSxcbiAgICAgICAgICAgICAgZXh0cmFnb2FsczogbWF0Y2hbJ2FnZ3JlZ2F0ZS1ob21lLXRlYW0tZ29hbHMnXSxcbiAgICAgICAgICAgICAgd2lubmVyOiBob21lVG90YWxHb2FscyA+IHZpc2l0VG90YWxHb2Fsc1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGF3YXk6IHtcbiAgICAgICAgICAgICAgaW1nOiBtYXRjaFsndmlzaXRpbmctdGVhbSddWyd0ZWFtLWxvZ28tdXJsJ10sXG4gICAgICAgICAgICAgIG5hbWU6IG1hdGNoWyd2aXNpdGluZy10ZWFtJ11bJ3RlYW0tbmFtZSddLFxuICAgICAgICAgICAgICBnb2FsczogbWF0Y2hbJ3Zpc2l0aW5nLXNjb3JlJ10sXG4gICAgICAgICAgICAgIGV4dHJhZ29hbHM6IG1hdGNoWydhZ2dyZWdhdGUtdmlzaXRpbmctdGVhbS1nb2FscyddLFxuICAgICAgICAgICAgICB3aW5uZXI6IGhvbWVUb3RhbEdvYWxzIDwgdmlzaXRUb3RhbEdvYWxzXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaGFzRW5kZWQ6IG1hdGNoLnN0YXR1cyA9PT0gJ2ZpbmFsJyxcbiAgICAgICAgICAgIGlzTGl2ZTogbWF0Y2hbJ2xpdmUtbWF0Y2gnXVsnbGl2ZS1taW51dGUnXSAhPT0gMCxcbiAgICAgICAgICAgIHN0YXR1czogc3RhdHVzLFxuICAgICAgICAgICAgbGluazogJ2h0dHBzOi8vd3d3Lmdvb2dsZS5jb20uYXInLFxuICAgICAgICAgICAgcGxhY2U6IG1hdGNoLnN0YWRpdW1cbiAgICAgICAgICB9O1xuICAgICAgICAgIG5ld0RhdGUubWF0Y2hlcy5wdXNoKG5ld01hdGNoKTtcbiAgICAgICAgfSlcblxuICAgICAgICBfdGhpcy5kYXRlcy5wdXNoKG5ld0RhdGUpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIFJ1biBwYXJlbnQgaW5pdCBpZiBhdmFpbGFibGVcbiAgICAgIGlmIChfdGhpcy5vbmluaXQpIF90aGlzLm9uaW5pdChfdGhpcy5kYXRlcyk7XG4gICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgIGlmIChfdGhpcy5vbmVycm9yKSBfdGhpcy5vbmVycm9yKGVycik7XG4gICAgfSlcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZveFJlc3VsdGFkb3NDb21wb25lbnQgfSBmcm9tICcuL2ZveC1yZXN1bHRhZG9zLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbRm94UmVzdWx0YWRvc0NvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtcbiAgICBGb3hSZXN1bHRhZG9zQ29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRm94UmVzdWx0YWRvc01vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJJbnB1dCIsIk5nTW9kdWxlIiwiQ29tbW9u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