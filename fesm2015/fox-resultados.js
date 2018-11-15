import { Component, Input, NgModule } from '@angular/core';
import axios from 'axios';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var template = `
<section class="resultados-wrapper">
	<div class="container-fluid p-0">
		<div class="row">
			<div class="col-12">
				<h1>{{title}}</h1>
			</div>
		</div>

		<div class="resultados-table" *ngFor="let date of dates">
			<div class="row">
				<div class="col-12">
					<div class="resultados-table_date">
						<h2>{{date.label}}</h2>
					</div>
				</div>
			</div>

			<div class="{{'resultados-table_matches' + (match.isLive ? ' live' : (!match.isLive && !match.hasEnded ? ' not-started' : ''))}}" *ngFor="let match of date.matches">

				<div class="row no-gutters" (click)="!match.isLive && !match.hasEnded ? onMatchClick(match) : ''">
					<!-- Match Teams -->
					<div class="col-md-4 col-8" >
						<div class="{{'team' + (match.home.winner ? ' won' : '')}}">
							<img src="{{match.home.img}}" />
							<span>{{match.home.name}}</span>
						</div>
						<div class="{{'team' + (match.away.winner ? ' won' : '')}}">
							<img src="{{match.away.img}}" />
							<span>{{match.away.name}}</span>
						</div>
					</div>

					<!-- Match Goals -->
					<div class="col-md-1 col-2 text-center text-md-left">
						<span class="{{'goals' + (match.home.winner ? ' won' : '')}}">{{match.home.goals}}<sup *ngIf="match.home.extragoals">{{match.home.extragoals}}</sup></span>
						<span class="{{'goals' + (match.away.winner ? ' won' : '')}}">{{match.away.goals}}<sup *ngIf="match.away.extragoals">{{match.away.extragoals}}</sup></span>
					</div>

					<!-- Match Status -->
					<div class="col-md-3 col-2 justify-content-center text-center text-md-left">
						<span class="status">{{match.status}}</span>
						<span *ngIf="!match.isLive && !match.hasEnded && match.place" class="place">{{match.place}}</span>
					</div>

					<!-- Watch Online -->
					<div class="col-md-3 justify-content-center">
						<button class="cta-watch inverse" *ngIf="match.hasEnded" (click)="onWatch(match)">
							<svg class="play-icon" xmlns="http://www.w3.org/2000/svg" width="8" height="10" viewBox="0 0 8 10">
								<g fill="none">
									<g class="play-icon_fill">
										<polygon transform="translate(-26 -10)translate(26 10)translate(4 5)rotate(90)translate(-4 -5)" points="4 1 9 9 -1 9"/>
									</g>
								</g>
							</svg>
							Revivelo
						</button>
						<button type="button" class="cta-watch" *ngIf="match.isLive" (click)="onWatchLive(match)">
							<svg class="play-icon" xmlns="http://www.w3.org/2000/svg" width="8" height="10" viewBox="0 0 8 10">
								<g fill="none">
									<g class="play-icon_fill">
										<polygon transform="translate(-26 -10)translate(26 10)translate(4 5)rotate(90)translate(-4 -5)" points="4 1 9 9 -1 9"/>
									</g>
								</g>
							</svg>
							Miralo en vivo
						</button>
					</div>
				</div>

			</div>
			
		</div>
	</div>


	
</section>`;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var style = `
.resultados-wrapper {
	font-family: "Roboto", sans-serif;
	font-size: 14px;
	font-weight: 400;
	margin: 50px 0;
}

h1 {
	font-size: 1.25em;
	font-weight: 500;
}

.resultados-table {
	box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, .1);;
	margin: 20px 0;
}

.resultados-table_date {
	background: #fff;	
	margin: 2px 0;
	padding: 18px 14px;
	text-transform: uppercase;
}

h2 {
	font-size: .9em;
	font-weight: 500;
	margin: 0;
	padding: 0;
}

.resultados-table_matches {
	background: #fff;
	border-bottom: 1px solid #f7f7f7;
	padding: 8px 14px;
}

@media (max-width: 768px) {
	.resultados-table_matches {
		padding: 5px 14px;
	}
}

.resultados-table_matches:last-child {
	border-bottom: 0;
}

.resultados-table_matches .row > [class*='col']{
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

.resultados-table_matches.live {
	background: rgba(0, 122, 255, .1);
}

.team {
	align-items: center;
	display: flex;
	font-size: 1.1em;
}
.team:first-child {
	margin: 10px 0 6px;
}
.team:last-child {
	margin: 6px 0 10px;
}

.team.won {
	font-weight: 600;
}

.team img {
	display: inline-block;
	margin: 0 5px;
	height: 30px;
	width: 30px;
	vertical-align: middle;
}


@media (max-width: 768px) {
	.team {
		font-size: 1.1em;
	}

	.team img {
		height: 26px;
		margin-left: 0;
		width: 26px;
	}
}

.goals {
	color: #000;
	display: block;
	font-size: 1.2em;
	font-weight: 400;
	margin: 6px 0;
}

@media (max-width: 768px) {
	.goals {
		font-size: 1.3em;
		margin: 10px 0;
	}
}

.goals sup {
	font-size: .6em;
	left: 6px;
	top: -8px;
}

.goals.won {
	font-weight: 600;
}

.live .goals {
	color: #007aff;
}


.status {
	color: #999;
	font-size: .85em;
	text-transform: uppercase;
}

@media (max-width: 768px) {
	.status {
		font-size: .8em;
	}
}

.not-started .status {
	color: #000;
}

.live .status {
	color: #007aff;
}

.place {
	color: #999;
	margin-top: 8px;
}

@media (max-width: 768px) {
	.place {
		display: none;
	}
}

.cta-watch {
	-moz-appearance: none;
	-webkit-appearance: none;
	align-self: flex-end;
	background: #007aff;
	border: 1px solid #007aff;
	border-radius: 4px;
	color: #fff;
	cursor: pointer;
	display: inline-block;
	font-family: "Roboto", sans-serif;
	font-size: .75em;
	font-weight: 500;
	padding: 6px 0 4px;
	text-align: center;
	width: 126px;
	text-transform: uppercase;
}

@media (max-width: 768px) {
	.cta-watch {
		align-self: center;
		font-size: .7em;
		margin-top: 2px;
		width: 108px;
	}
}

.cta-watch:hover {
	background: #368eee;
	border-color: #368eee;
}

.cta-watch .play-icon {
	display: inline-block;
	height: 10px;
	margin-top: -2px;
	vertical-align: middle;
	width: 12px;
}

.cta-watch .play-icon_fill {
	fill: #fff;
}

.cta-watch.inverse {
	background: transparent;
	color: #007aff;
}

.cta-watch.inverse:hover {
	border-color: #368eee;
	color: #368eee;
}

.cta-watch.inverse .play-icon_fill {
	fill: #007aff;
}
`;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class FoxResultadosComponent {
    constructor() {
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
    ngOnInit() {
        // Usefull variables
        const /** @type {?} */ _this = this;
        const /** @type {?} */ params = {};
        const /** @type {?} */ sortedRows = {};
        const /** @type {?} */ monthLabels = {
            'es': ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Augosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
            'pt': ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
        };
        const /** @type {?} */ today = parseInt('' + (new Date()).getFullYear() + ((new Date()).getMonth() + 1) + (new Date()).getDate());
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
            resp.data.forEach(row => {
                const /** @type {?} */ key = parseInt(row.year + '' + row.month + '' + row.day);
                if (!sortedRows[key])
                    sortedRows[key] = [];
                sortedRows[key].push(row);
            });
            // Prepare data for frontend
            Object.keys(sortedRows).forEach(date => {
                const /** @type {?} */ newDate = {
                    label: sortedRows[date][0].day + ' ' + monthLabels[_this.lang][(sortedRows[date][0].month - 1)] + ' ' + sortedRows[date][0].year,
                    matches: []
                };
                sortedRows[date].forEach(match => {
                    let /** @type {?} */ status = '';
                    if (match.status === 'final') {
                        status = 'Final';
                    }
                    else {
                        status = match['live-match']['live-minute'] + ' ';
                        status = status + (match['live-match']['total-periods'] === 1 ? 'PT' : 'ST');
                    }
                    const /** @type {?} */ homeTotalGoals = (match['home-score'] ? parseInt(match['home-score']) : 0) + (match['aggregate-home-team-goals'] ? parseInt(match['aggregate-home-team-goals']) : 0);
                    const /** @type {?} */ visitTotalGoals = (match['visiting-score'] ? parseInt(match['visiting-score']) : 0) + (match['aggregate-visiting-team-goals'] ? parseInt(match['aggregate-visiting-team-goals']) : 0);
                    let /** @type {?} */ newMatch = {
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
        }).catch(err => {
            if (_this.onerror)
                _this.onerror(err);
        });
    }
}
FoxResultadosComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-fox-resultados',
                template: template + '',
                styles: [style + '']
            },] },
];
/** @nocollapse */
FoxResultadosComponent.ctorParameters = () => [];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class FoxResultadosModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { FoxResultadosModule, FoxResultadosComponent };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm94LXJlc3VsdGFkb3MuanMubWFwIiwic291cmNlcyI6WyJuZzovL2ZveC1yZXN1bHRhZG9zL2FwcC9tb2R1bGVzL2ZveC1yZXN1bHRhZG9zL2ZveC1yZXN1bHRhZG9zLmNvbXBvbmVudC5odG1sLnRzIiwibmc6Ly9mb3gtcmVzdWx0YWRvcy9hcHAvbW9kdWxlcy9mb3gtcmVzdWx0YWRvcy9mb3gtcmVzdWx0YWRvcy5jb21wb25lbnQuY3NzLnRzIiwibmc6Ly9mb3gtcmVzdWx0YWRvcy9hcHAvbW9kdWxlcy9mb3gtcmVzdWx0YWRvcy9mb3gtcmVzdWx0YWRvcy5jb21wb25lbnQudHMiLCJuZzovL2ZveC1yZXN1bHRhZG9zL2FwcC9tb2R1bGVzL2ZveC1yZXN1bHRhZG9zL2ZveC1yZXN1bHRhZG9zLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBgXG48c2VjdGlvbiBjbGFzcz1cInJlc3VsdGFkb3Mtd3JhcHBlclwiPlxuXHQ8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkIHAtMFwiPlxuXHRcdDxkaXYgY2xhc3M9XCJyb3dcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cblx0XHRcdFx0PGgxPnt7dGl0bGV9fTwvaDE+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblxuXHRcdDxkaXYgY2xhc3M9XCJyZXN1bHRhZG9zLXRhYmxlXCIgKm5nRm9yPVwibGV0IGRhdGUgb2YgZGF0ZXNcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJyb3dcIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC0xMlwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJyZXN1bHRhZG9zLXRhYmxlX2RhdGVcIj5cblx0XHRcdFx0XHRcdDxoMj57e2RhdGUubGFiZWx9fTwvaDI+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdDxkaXYgY2xhc3M9XCJ7eydyZXN1bHRhZG9zLXRhYmxlX21hdGNoZXMnICsgKG1hdGNoLmlzTGl2ZSA/ICcgbGl2ZScgOiAoIW1hdGNoLmlzTGl2ZSAmJiAhbWF0Y2guaGFzRW5kZWQgPyAnIG5vdC1zdGFydGVkJyA6ICcnKSl9fVwiICpuZ0Zvcj1cImxldCBtYXRjaCBvZiBkYXRlLm1hdGNoZXNcIj5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwicm93IG5vLWd1dHRlcnNcIiAoY2xpY2spPVwiIW1hdGNoLmlzTGl2ZSAmJiAhbWF0Y2guaGFzRW5kZWQgPyBvbk1hdGNoQ2xpY2sobWF0Y2gpIDogJydcIj5cblx0XHRcdFx0XHQ8IS0tIE1hdGNoIFRlYW1zIC0tPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtbWQtNCBjb2wtOFwiID5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ7eyd0ZWFtJyArIChtYXRjaC5ob21lLndpbm5lciA/ICcgd29uJyA6ICcnKX19XCI+XG5cdFx0XHRcdFx0XHRcdDxpbWcgc3JjPVwie3ttYXRjaC5ob21lLmltZ319XCIgLz5cblx0XHRcdFx0XHRcdFx0PHNwYW4+e3ttYXRjaC5ob21lLm5hbWV9fTwvc3Bhbj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInt7J3RlYW0nICsgKG1hdGNoLmF3YXkud2lubmVyID8gJyB3b24nIDogJycpfX1cIj5cblx0XHRcdFx0XHRcdFx0PGltZyBzcmM9XCJ7e21hdGNoLmF3YXkuaW1nfX1cIiAvPlxuXHRcdFx0XHRcdFx0XHQ8c3Bhbj57e21hdGNoLmF3YXkubmFtZX19PC9zcGFuPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHQ8IS0tIE1hdGNoIEdvYWxzIC0tPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtbWQtMSBjb2wtMiB0ZXh0LWNlbnRlciB0ZXh0LW1kLWxlZnRcIj5cblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwie3snZ29hbHMnICsgKG1hdGNoLmhvbWUud2lubmVyID8gJyB3b24nIDogJycpfX1cIj57e21hdGNoLmhvbWUuZ29hbHN9fTxzdXAgKm5nSWY9XCJtYXRjaC5ob21lLmV4dHJhZ29hbHNcIj57e21hdGNoLmhvbWUuZXh0cmFnb2Fsc319PC9zdXA+PC9zcGFuPlxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJ7eydnb2FscycgKyAobWF0Y2guYXdheS53aW5uZXIgPyAnIHdvbicgOiAnJyl9fVwiPnt7bWF0Y2guYXdheS5nb2Fsc319PHN1cCAqbmdJZj1cIm1hdGNoLmF3YXkuZXh0cmFnb2Fsc1wiPnt7bWF0Y2guYXdheS5leHRyYWdvYWxzfX08L3N1cD48L3NwYW4+XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHQ8IS0tIE1hdGNoIFN0YXR1cyAtLT5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLW1kLTMgY29sLTIganVzdGlmeS1jb250ZW50LWNlbnRlciB0ZXh0LWNlbnRlciB0ZXh0LW1kLWxlZnRcIj5cblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwic3RhdHVzXCI+e3ttYXRjaC5zdGF0dXN9fTwvc3Bhbj5cblx0XHRcdFx0XHRcdDxzcGFuICpuZ0lmPVwiIW1hdGNoLmlzTGl2ZSAmJiAhbWF0Y2guaGFzRW5kZWQgJiYgbWF0Y2gucGxhY2VcIiBjbGFzcz1cInBsYWNlXCI+e3ttYXRjaC5wbGFjZX19PC9zcGFuPlxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0PCEtLSBXYXRjaCBPbmxpbmUgLS0+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC1tZC0zIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cblx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3M9XCJjdGEtd2F0Y2ggaW52ZXJzZVwiICpuZ0lmPVwibWF0Y2guaGFzRW5kZWRcIiAoY2xpY2spPVwib25XYXRjaChtYXRjaClcIj5cblx0XHRcdFx0XHRcdFx0PHN2ZyBjbGFzcz1cInBsYXktaWNvblwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjhcIiBoZWlnaHQ9XCIxMFwiIHZpZXdCb3g9XCIwIDAgOCAxMFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxnIGZpbGw9XCJub25lXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZyBjbGFzcz1cInBsYXktaWNvbl9maWxsXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxwb2x5Z29uIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMjYgLTEwKXRyYW5zbGF0ZSgyNiAxMCl0cmFuc2xhdGUoNCA1KXJvdGF0ZSg5MCl0cmFuc2xhdGUoLTQgLTUpXCIgcG9pbnRzPVwiNCAxIDkgOSAtMSA5XCIvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0XHRcdFx0PC9zdmc+XG5cdFx0XHRcdFx0XHRcdFJldml2ZWxvXG5cdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY3RhLXdhdGNoXCIgKm5nSWY9XCJtYXRjaC5pc0xpdmVcIiAoY2xpY2spPVwib25XYXRjaExpdmUobWF0Y2gpXCI+XG5cdFx0XHRcdFx0XHRcdDxzdmcgY2xhc3M9XCJwbGF5LWljb25cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCI4XCIgaGVpZ2h0PVwiMTBcIiB2aWV3Qm94PVwiMCAwIDggMTBcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZyBmaWxsPVwibm9uZVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGcgY2xhc3M9XCJwbGF5LWljb25fZmlsbFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8cG9seWdvbiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTI2IC0xMCl0cmFuc2xhdGUoMjYgMTApdHJhbnNsYXRlKDQgNSlyb3RhdGUoOTApdHJhbnNsYXRlKC00IC01KVwiIHBvaW50cz1cIjQgMSA5IDkgLTEgOVwiLz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0XHRcdDwvc3ZnPlxuXHRcdFx0XHRcdFx0XHRNaXJhbG8gZW4gdml2b1xuXHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHQ8L2Rpdj5cblx0XHRcdFxuXHRcdDwvZGl2PlxuXHQ8L2Rpdj5cblxuXG5cdFxuPC9zZWN0aW9uPmBcbiIsImV4cG9ydCBkZWZhdWx0IGBcbi5yZXN1bHRhZG9zLXdyYXBwZXIge1xuXHRmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcblx0Zm9udC1zaXplOiAxNHB4O1xuXHRmb250LXdlaWdodDogNDAwO1xuXHRtYXJnaW46IDUwcHggMDtcbn1cblxuaDEge1xuXHRmb250LXNpemU6IDEuMjVlbTtcblx0Zm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnJlc3VsdGFkb3MtdGFibGUge1xuXHRib3gtc2hhZG93OiAwcHggMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAuMSk7O1xuXHRtYXJnaW46IDIwcHggMDtcbn1cblxuLnJlc3VsdGFkb3MtdGFibGVfZGF0ZSB7XG5cdGJhY2tncm91bmQ6ICNmZmY7XHRcblx0bWFyZ2luOiAycHggMDtcblx0cGFkZGluZzogMThweCAxNHB4O1xuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG5oMiB7XG5cdGZvbnQtc2l6ZTogLjllbTtcblx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0bWFyZ2luOiAwO1xuXHRwYWRkaW5nOiAwO1xufVxuXG4ucmVzdWx0YWRvcy10YWJsZV9tYXRjaGVzIHtcblx0YmFja2dyb3VuZDogI2ZmZjtcblx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmN2Y3Zjc7XG5cdHBhZGRpbmc6IDhweCAxNHB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcblx0LnJlc3VsdGFkb3MtdGFibGVfbWF0Y2hlcyB7XG5cdFx0cGFkZGluZzogNXB4IDE0cHg7XG5cdH1cbn1cblxuLnJlc3VsdGFkb3MtdGFibGVfbWF0Y2hlczpsYXN0LWNoaWxkIHtcblx0Ym9yZGVyLWJvdHRvbTogMDtcbn1cblxuLnJlc3VsdGFkb3MtdGFibGVfbWF0Y2hlcyAucm93ID4gW2NsYXNzKj0nY29sJ117XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnJlc3VsdGFkb3MtdGFibGVfbWF0Y2hlcy5saXZlIHtcblx0YmFja2dyb3VuZDogcmdiYSgwLCAxMjIsIDI1NSwgLjEpO1xufVxuXG4udGVhbSB7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZvbnQtc2l6ZTogMS4xZW07XG59XG4udGVhbTpmaXJzdC1jaGlsZCB7XG5cdG1hcmdpbjogMTBweCAwIDZweDtcbn1cbi50ZWFtOmxhc3QtY2hpbGQge1xuXHRtYXJnaW46IDZweCAwIDEwcHg7XG59XG5cbi50ZWFtLndvbiB7XG5cdGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi50ZWFtIGltZyB7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0bWFyZ2luOiAwIDVweDtcblx0aGVpZ2h0OiAzMHB4O1xuXHR3aWR0aDogMzBweDtcblx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcblx0LnRlYW0ge1xuXHRcdGZvbnQtc2l6ZTogMS4xZW07XG5cdH1cblxuXHQudGVhbSBpbWcge1xuXHRcdGhlaWdodDogMjZweDtcblx0XHRtYXJnaW4tbGVmdDogMDtcblx0XHR3aWR0aDogMjZweDtcblx0fVxufVxuXG4uZ29hbHMge1xuXHRjb2xvcjogIzAwMDtcblx0ZGlzcGxheTogYmxvY2s7XG5cdGZvbnQtc2l6ZTogMS4yZW07XG5cdGZvbnQtd2VpZ2h0OiA0MDA7XG5cdG1hcmdpbjogNnB4IDA7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuXHQuZ29hbHMge1xuXHRcdGZvbnQtc2l6ZTogMS4zZW07XG5cdFx0bWFyZ2luOiAxMHB4IDA7XG5cdH1cbn1cblxuLmdvYWxzIHN1cCB7XG5cdGZvbnQtc2l6ZTogLjZlbTtcblx0bGVmdDogNnB4O1xuXHR0b3A6IC04cHg7XG59XG5cbi5nb2Fscy53b24ge1xuXHRmb250LXdlaWdodDogNjAwO1xufVxuXG4ubGl2ZSAuZ29hbHMge1xuXHRjb2xvcjogIzAwN2FmZjtcbn1cblxuXG4uc3RhdHVzIHtcblx0Y29sb3I6ICM5OTk7XG5cdGZvbnQtc2l6ZTogLjg1ZW07XG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuXHQuc3RhdHVzIHtcblx0XHRmb250LXNpemU6IC44ZW07XG5cdH1cbn1cblxuLm5vdC1zdGFydGVkIC5zdGF0dXMge1xuXHRjb2xvcjogIzAwMDtcbn1cblxuLmxpdmUgLnN0YXR1cyB7XG5cdGNvbG9yOiAjMDA3YWZmO1xufVxuXG4ucGxhY2Uge1xuXHRjb2xvcjogIzk5OTtcblx0bWFyZ2luLXRvcDogOHB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcblx0LnBsYWNlIHtcblx0XHRkaXNwbGF5OiBub25lO1xuXHR9XG59XG5cbi5jdGEtd2F0Y2gge1xuXHQtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG5cdC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcblx0YWxpZ24tc2VsZjogZmxleC1lbmQ7XG5cdGJhY2tncm91bmQ6ICMwMDdhZmY7XG5cdGJvcmRlcjogMXB4IHNvbGlkICMwMDdhZmY7XG5cdGJvcmRlci1yYWRpdXM6IDRweDtcblx0Y29sb3I6ICNmZmY7XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcblx0Zm9udC1zaXplOiAuNzVlbTtcblx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0cGFkZGluZzogNnB4IDAgNHB4O1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdHdpZHRoOiAxMjZweDtcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG5cdC5jdGEtd2F0Y2gge1xuXHRcdGFsaWduLXNlbGY6IGNlbnRlcjtcblx0XHRmb250LXNpemU6IC43ZW07XG5cdFx0bWFyZ2luLXRvcDogMnB4O1xuXHRcdHdpZHRoOiAxMDhweDtcblx0fVxufVxuXG4uY3RhLXdhdGNoOmhvdmVyIHtcblx0YmFja2dyb3VuZDogIzM2OGVlZTtcblx0Ym9yZGVyLWNvbG9yOiAjMzY4ZWVlO1xufVxuXG4uY3RhLXdhdGNoIC5wbGF5LWljb24ge1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdGhlaWdodDogMTBweDtcblx0bWFyZ2luLXRvcDogLTJweDtcblx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcblx0d2lkdGg6IDEycHg7XG59XG5cbi5jdGEtd2F0Y2ggLnBsYXktaWNvbl9maWxsIHtcblx0ZmlsbDogI2ZmZjtcbn1cblxuLmN0YS13YXRjaC5pbnZlcnNlIHtcblx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cdGNvbG9yOiAjMDA3YWZmO1xufVxuXG4uY3RhLXdhdGNoLmludmVyc2U6aG92ZXIge1xuXHRib3JkZXItY29sb3I6ICMzNjhlZWU7XG5cdGNvbG9yOiAjMzY4ZWVlO1xufVxuXG4uY3RhLXdhdGNoLmludmVyc2UgLnBsYXktaWNvbl9maWxsIHtcblx0ZmlsbDogIzAwN2FmZjtcbn1cbmBcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vZm94LXJlc3VsdGFkb3MuY29tcG9uZW50Lmh0bWwnXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9mb3gtcmVzdWx0YWRvcy5jb21wb25lbnQuY3NzJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtZm94LXJlc3VsdGFkb3MnLFxuICB0ZW1wbGF0ZTogdGVtcGxhdGUgKyAnJyxcbiAgc3R5bGVzOiBbc3R5bGUgKyAnJ11cbn0pXG5leHBvcnQgY2xhc3MgRm94UmVzdWx0YWRvc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGNvbXBldGl0aW9uaWQ6IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSBsYW5nOiBzdHJpbmcgPSAnZXMnO1xuICBASW5wdXQoKSBkYXRlOiBzdHJpbmcgPSAnJyArIChuZXcgRGF0ZSgpKS5nZXRGdWxsWWVhcigpICsgKChuZXcgRGF0ZSgpKS5nZXRNb250aCgpICsgMSkgKyAobmV3IERhdGUoKSkuZ2V0RGF0ZSgpO1xuICBASW5wdXQoKSBtYXg6IG51bWJlciA9IDA7XG4gIEBJbnB1dCgpIHR5cGU6IHN0cmluZyA9ICdmdXRib2wnO1xuICBASW5wdXQoKSBjb3VudHJ5OiBzdHJpbmcgPSAnYXInO1xuXG4gIEBJbnB1dCgpIG9uaW5pdDogRnVuY3Rpb247XG4gIEBJbnB1dCgpIG9uZXJyb3I6IEZ1bmN0aW9uO1xuICBASW5wdXQoKSBvbk1hdGNoQ2xpY2s6IEZ1bmN0aW9uO1xuICBASW5wdXQoKSBvbldhdGNoTGl2ZTogRnVuY3Rpb247XG4gIEBJbnB1dCgpIG9uV2F0Y2g6IEZ1bmN0aW9uO1xuXG4gIHRpdGxlID0gJ1Jlc3VsdGFkb3MnO1xuICBkYXRlcyA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICAvLyBVc2VmdWxsIHZhcmlhYmxlc1xuICAgIGNvbnN0IF90aGlzID0gdGhpcztcbiAgICBjb25zdCBwYXJhbXMgPSB7fTtcbiAgICBjb25zdCBzb3J0ZWRSb3dzID0ge307XG4gICAgY29uc3QgbW9udGhMYWJlbHMgPSB7XG4gICAgICAnZXMnOiBbJ0VuZXJvJywnRmVicmVybycsJ01hcnpvJywnQWJyaWwnLCdNYXlvJywnSnVuaW8nLCAnSnVsaW8nLCdBdWdvc3RvJywnU2VwdGllbWJyZScsJ09jdHVicmUnLCdOb3ZpZW1icmUnLCdEaWNpZW1icmUnXSxcbiAgICAgICdwdCc6IFsnSmFuZWlybycsICdGZXZlcmVpcm8nLCAnTWFyw4PCp28nLCAnQWJyaWwnLCAnTWFpbycsICdKdW5obycsICdKdWxobycsICdBZ29zdG8nLCAnU2V0ZW1icm8nLCAnT3V0dWJybycsICdOb3ZlbWJybycsICdEZXplbWJybyddXG4gICAgfTtcbiAgICBjb25zdCB0b2RheSA9IHBhcnNlSW50KCcnICsgKG5ldyBEYXRlKCkpLmdldEZ1bGxZZWFyKCkgKyAoKG5ldyBEYXRlKCkpLmdldE1vbnRoKCkgKyAxKSArIChuZXcgRGF0ZSgpKS5nZXREYXRlKCkpXG5cbiAgICAvLyBBUEkgUGFyYW1zIHNldHVwXG4gICAgaWYgKF90aGlzLmNvdW50cnkpIHBhcmFtc1snY291bnRyeS1jb2RlJ10gPSBfdGhpcy5jb3VudHJ5O1xuICAgIGlmIChfdGhpcy50eXBlKSBwYXJhbXNbJ3R5cGUnXSA9IF90aGlzLnR5cGU7XG4gICAgaWYgKF90aGlzLmRhdGUpIHBhcmFtc1snZGF0ZXMtYXJyYXknXSA9IF90aGlzLmRhdGU7XG4gICAgaWYgKF90aGlzLmNvbXBldGl0aW9uaWQpIHBhcmFtc1snY29tcGV0aXRpb24taWQnXSA9IF90aGlzLmNvbXBldGl0aW9uaWQ7XG5cbiAgICBheGlvcy5nZXQoJ2h0dHBzOi8vc3RhdHMuZm94c3BvcnRzbGEuY29tL3N0YXRzL2dldF9yZXN1bHRzX3YyJywge1xuICAgICAgcGFyYW1zOiBwYXJhbXNcbiAgICB9KS50aGVuKGZ1bmN0aW9uKHJlc3ApIHtcblxuICAgICAgLy8gU29ydCByZXN1bHRzIGFuZCBncm91cCBieSBkYXRlXG4gICAgICByZXNwLmRhdGEuZm9yRWFjaChyb3cgPT4ge1xuICAgICAgICBjb25zdCBrZXkgPSBwYXJzZUludChyb3cueWVhciArICcnICsgcm93Lm1vbnRoICsgJycgKyByb3cuZGF5KTtcbiAgICAgICAgaWYgKCFzb3J0ZWRSb3dzW2tleV0pIHNvcnRlZFJvd3Nba2V5XSA9IFtdXG4gICAgICAgIHNvcnRlZFJvd3Nba2V5XS5wdXNoKHJvdyk7XG4gICAgICB9KTtcblxuICAgICAgLy8gUHJlcGFyZSBkYXRhIGZvciBmcm9udGVuZFxuICAgICAgT2JqZWN0LmtleXMoc29ydGVkUm93cykuZm9yRWFjaChkYXRlID0+IHtcbiAgICAgICAgY29uc3QgbmV3RGF0ZSA9IHtcbiAgICAgICAgICBsYWJlbDogc29ydGVkUm93c1tkYXRlXVswXS5kYXkgKyAnICcgKyBtb250aExhYmVsc1tfdGhpcy5sYW5nXVsoc29ydGVkUm93c1tkYXRlXVswXS5tb250aCAtIDEpXSArICcgJyArIHNvcnRlZFJvd3NbZGF0ZV1bMF0ueWVhcixcbiAgICAgICAgICBtYXRjaGVzOiBbXVxuICAgICAgICB9O1xuICAgICAgICBzb3J0ZWRSb3dzW2RhdGVdLmZvckVhY2gobWF0Y2ggPT4ge1xuICAgICAgICAgIGxldCBzdGF0dXMgPSAnJztcbiAgICAgICAgICBpZiAobWF0Y2guc3RhdHVzID09PSAnZmluYWwnKSB7XG4gICAgICAgICAgICBzdGF0dXMgPSAnRmluYWwnO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdGF0dXMgPSBtYXRjaFsnbGl2ZS1tYXRjaCddWydsaXZlLW1pbnV0ZSddICsgJyAnO1xuICAgICAgICAgICAgc3RhdHVzID0gc3RhdHVzICsgKG1hdGNoWydsaXZlLW1hdGNoJ11bJ3RvdGFsLXBlcmlvZHMnXSA9PT0gMSA/ICdQVCcgOiAnU1QnKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGhvbWVUb3RhbEdvYWxzID0gKG1hdGNoWydob21lLXNjb3JlJ10gPyBwYXJzZUludChtYXRjaFsnaG9tZS1zY29yZSddKSA6IDApICsgKG1hdGNoWydhZ2dyZWdhdGUtaG9tZS10ZWFtLWdvYWxzJ10gPyBwYXJzZUludChtYXRjaFsnYWdncmVnYXRlLWhvbWUtdGVhbS1nb2FscyddKSA6IDApXG4gICAgICAgICAgY29uc3QgdmlzaXRUb3RhbEdvYWxzID0gKG1hdGNoWyd2aXNpdGluZy1zY29yZSddID8gcGFyc2VJbnQobWF0Y2hbJ3Zpc2l0aW5nLXNjb3JlJ10pIDogMCkgKyAobWF0Y2hbJ2FnZ3JlZ2F0ZS12aXNpdGluZy10ZWFtLWdvYWxzJ10gPyBwYXJzZUludChtYXRjaFsnYWdncmVnYXRlLXZpc2l0aW5nLXRlYW0tZ29hbHMnXSkgOiAwKVxuXG4gICAgICAgICAgbGV0IG5ld01hdGNoID0ge1xuICAgICAgICAgICAgcmF3RGF0YTogbWF0Y2gsXG4gICAgICAgICAgICBob21lOiB7XG4gICAgICAgICAgICAgIGltZzogbWF0Y2hbJ2hvbWUtdGVhbSddWyd0ZWFtLWxvZ28tdXJsJ10sXG4gICAgICAgICAgICAgIG5hbWU6IG1hdGNoWydob21lLXRlYW0nXVsndGVhbS1uYW1lJ10sXG4gICAgICAgICAgICAgIGdvYWxzOiBtYXRjaFsnaG9tZS1zY29yZSddLFxuICAgICAgICAgICAgICBleHRyYWdvYWxzOiBtYXRjaFsnYWdncmVnYXRlLWhvbWUtdGVhbS1nb2FscyddLFxuICAgICAgICAgICAgICB3aW5uZXI6IGhvbWVUb3RhbEdvYWxzID4gdmlzaXRUb3RhbEdvYWxzXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYXdheToge1xuICAgICAgICAgICAgICBpbWc6IG1hdGNoWyd2aXNpdGluZy10ZWFtJ11bJ3RlYW0tbG9nby11cmwnXSxcbiAgICAgICAgICAgICAgbmFtZTogbWF0Y2hbJ3Zpc2l0aW5nLXRlYW0nXVsndGVhbS1uYW1lJ10sXG4gICAgICAgICAgICAgIGdvYWxzOiBtYXRjaFsndmlzaXRpbmctc2NvcmUnXSxcbiAgICAgICAgICAgICAgZXh0cmFnb2FsczogbWF0Y2hbJ2FnZ3JlZ2F0ZS12aXNpdGluZy10ZWFtLWdvYWxzJ10sXG4gICAgICAgICAgICAgIHdpbm5lcjogaG9tZVRvdGFsR29hbHMgPCB2aXNpdFRvdGFsR29hbHNcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBoYXNFbmRlZDogbWF0Y2guc3RhdHVzID09PSAnZmluYWwnLFxuICAgICAgICAgICAgaXNMaXZlOiBtYXRjaFsnbGl2ZS1tYXRjaCddWydsaXZlLW1pbnV0ZSddICE9PSAwLFxuICAgICAgICAgICAgc3RhdHVzOiBzdGF0dXMsXG4gICAgICAgICAgICBsaW5rOiAnaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS5hcicsXG4gICAgICAgICAgICBwbGFjZTogbWF0Y2guc3RhZGl1bVxuICAgICAgICAgIH07XG4gICAgICAgICAgbmV3RGF0ZS5tYXRjaGVzLnB1c2gobmV3TWF0Y2gpO1xuICAgICAgICB9KVxuXG4gICAgICAgIF90aGlzLmRhdGVzLnB1c2gobmV3RGF0ZSk7XG4gICAgICB9KTtcblxuICAgICAgLy8gUnVuIHBhcmVudCBpbml0IGlmIGF2YWlsYWJsZVxuICAgICAgaWYgKF90aGlzLm9uaW5pdCkgX3RoaXMub25pbml0KF90aGlzLmRhdGVzKTtcbiAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgaWYgKF90aGlzLm9uZXJyb3IpIF90aGlzLm9uZXJyb3IoZXJyKTtcbiAgICB9KVxuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm94UmVzdWx0YWRvc0NvbXBvbmVudCB9IGZyb20gJy4vZm94LXJlc3VsdGFkb3MuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtGb3hSZXN1bHRhZG9zQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1xuICAgIEZveFJlc3VsdGFkb3NDb21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBGb3hSZXN1bHRhZG9zTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsZUFBZTs7Ozs7Ozs7Ozs7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