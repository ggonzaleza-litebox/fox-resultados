/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
import template from './fox-resultados.component.html';
import style from './fox-resultados.component.css';
import axios from 'axios';
export class FoxResultadosComponent {
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
function FoxResultadosComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    FoxResultadosComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    FoxResultadosComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    FoxResultadosComponent.propDecorators;
    /** @type {?} */
    FoxResultadosComponent.prototype.competitionid;
    /** @type {?} */
    FoxResultadosComponent.prototype.lang;
    /** @type {?} */
    FoxResultadosComponent.prototype.date;
    /** @type {?} */
    FoxResultadosComponent.prototype.max;
    /** @type {?} */
    FoxResultadosComponent.prototype.type;
    /** @type {?} */
    FoxResultadosComponent.prototype.country;
    /** @type {?} */
    FoxResultadosComponent.prototype.oninit;
    /** @type {?} */
    FoxResultadosComponent.prototype.onerror;
    /** @type {?} */
    FoxResultadosComponent.prototype.onMatchClick;
    /** @type {?} */
    FoxResultadosComponent.prototype.onWatchLive;
    /** @type {?} */
    FoxResultadosComponent.prototype.onWatch;
    /** @type {?} */
    FoxResultadosComponent.prototype.title;
    /** @type {?} */
    FoxResultadosComponent.prototype.dates;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm94LXJlc3VsdGFkb3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm94LXJlc3VsdGFkb3MvIiwic291cmNlcyI6WyJhcHAvbW9kdWxlcy9mb3gtcmVzdWx0YWRvcy9mb3gtcmVzdWx0YWRvcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sUUFBUSxNQUFNLGlDQUFpQyxDQUFBO0FBQ3RELE9BQU8sS0FBSyxNQUFNLGdDQUFnQyxDQUFBO0FBQ2xELE9BQU8sS0FBSyxNQUFNLE9BQU8sQ0FBQTtBQU96QixNQUFNO0lBaUJKOzZCQWhCaUMsRUFBRTtvQkFDWCxJQUFJO29CQUNKLEVBQUUsR0FBRyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRTttQkFDekYsQ0FBQztvQkFDQSxRQUFRO3VCQUNMLElBQUk7cUJBUXZCLFlBQVk7cUJBQ1osRUFBRTtLQUVNOzs7O0lBRWhCLFFBQVE7O1FBRU4sdUJBQU0sS0FBSyxHQUFHLElBQUksQ0FBQztRQUNuQix1QkFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLHVCQUFNLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFDdEIsdUJBQU0sV0FBVyxHQUFHO1lBQ2xCLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBQyxTQUFTLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBQyxTQUFTLEVBQUMsWUFBWSxFQUFDLFNBQVMsRUFBQyxXQUFXLEVBQUMsV0FBVyxDQUFDO1lBQzFILElBQUksRUFBRSxDQUFDLFNBQVMsRUFB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dXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2ZveC1yZXN1bHRhZG9zLmNvbXBvbmVudC5odG1sJ1xuaW1wb3J0IHN0eWxlIGZyb20gJy4vZm94LXJlc3VsdGFkb3MuY29tcG9uZW50LmNzcydcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWZveC1yZXN1bHRhZG9zJyxcbiAgdGVtcGxhdGU6IHRlbXBsYXRlICsgJycsXG4gIHN0eWxlczogW3N0eWxlICsgJyddXG59KVxuZXhwb3J0IGNsYXNzIEZveFJlc3VsdGFkb3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBjb21wZXRpdGlvbmlkOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgbGFuZzogc3RyaW5nID0gJ2VzJztcbiAgQElucHV0KCkgZGF0ZTogc3RyaW5nID0gJycgKyAobmV3IERhdGUoKSkuZ2V0RnVsbFllYXIoKSArICgobmV3IERhdGUoKSkuZ2V0TW9udGgoKSArIDEpICsgKG5ldyBEYXRlKCkpLmdldERhdGUoKTtcbiAgQElucHV0KCkgbWF4OiBudW1iZXIgPSAwO1xuICBASW5wdXQoKSB0eXBlOiBzdHJpbmcgPSAnZnV0Ym9sJztcbiAgQElucHV0KCkgY291bnRyeTogc3RyaW5nID0gJ2FyJztcblxuICBASW5wdXQoKSBvbmluaXQ6IEZ1bmN0aW9uO1xuICBASW5wdXQoKSBvbmVycm9yOiBGdW5jdGlvbjtcbiAgQElucHV0KCkgb25NYXRjaENsaWNrOiBGdW5jdGlvbjtcbiAgQElucHV0KCkgb25XYXRjaExpdmU6IEZ1bmN0aW9uO1xuICBASW5wdXQoKSBvbldhdGNoOiBGdW5jdGlvbjtcblxuICB0aXRsZSA9ICdSZXN1bHRhZG9zJztcbiAgZGF0ZXMgPSBbXTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLy8gVXNlZnVsbCB2YXJpYWJsZXNcbiAgICBjb25zdCBfdGhpcyA9IHRoaXM7XG4gICAgY29uc3QgcGFyYW1zID0ge307XG4gICAgY29uc3Qgc29ydGVkUm93cyA9IHt9O1xuICAgIGNvbnN0IG1vbnRoTGFiZWxzID0ge1xuICAgICAgJ2VzJzogWydFbmVybycsJ0ZlYnJlcm8nLCdNYXJ6bycsJ0FicmlsJywnTWF5bycsJ0p1bmlvJywgJ0p1bGlvJywnQXVnb3N0bycsJ1NlcHRpZW1icmUnLCdPY3R1YnJlJywnTm92aWVtYnJlJywnRGljaWVtYnJlJ10sXG4gICAgICAncHQnOiBbJ0phbmVpcm8nLCAnRmV2ZXJlaXJvJywgJ01hcsOnbycsICdBYnJpbCcsICdNYWlvJywgJ0p1bmhvJywgJ0p1bGhvJywgJ0Fnb3N0bycsICdTZXRlbWJybycsICdPdXR1YnJvJywgJ05vdmVtYnJvJywgJ0RlemVtYnJvJ11cbiAgICB9O1xuICAgIGNvbnN0IHRvZGF5ID0gcGFyc2VJbnQoJycgKyAobmV3IERhdGUoKSkuZ2V0RnVsbFllYXIoKSArICgobmV3IERhdGUoKSkuZ2V0TW9udGgoKSArIDEpICsgKG5ldyBEYXRlKCkpLmdldERhdGUoKSlcblxuICAgIC8vIEFQSSBQYXJhbXMgc2V0dXBcbiAgICBpZiAoX3RoaXMuY291bnRyeSkgcGFyYW1zWydjb3VudHJ5LWNvZGUnXSA9IF90aGlzLmNvdW50cnk7XG4gICAgaWYgKF90aGlzLnR5cGUpIHBhcmFtc1sndHlwZSddID0gX3RoaXMudHlwZTtcbiAgICBpZiAoX3RoaXMuZGF0ZSkgcGFyYW1zWydkYXRlcy1hcnJheSddID0gX3RoaXMuZGF0ZTtcbiAgICBpZiAoX3RoaXMuY29tcGV0aXRpb25pZCkgcGFyYW1zWydjb21wZXRpdGlvbi1pZCddID0gX3RoaXMuY29tcGV0aXRpb25pZDtcblxuICAgIGF4aW9zLmdldCgnaHR0cHM6Ly9zdGF0cy5mb3hzcG9ydHNsYS5jb20vc3RhdHMvZ2V0X3Jlc3VsdHNfdjInLCB7XG4gICAgICBwYXJhbXM6IHBhcmFtc1xuICAgIH0pLnRoZW4oZnVuY3Rpb24ocmVzcCkge1xuXG4gICAgICAvLyBTb3J0IHJlc3VsdHMgYW5kIGdyb3VwIGJ5IGRhdGVcbiAgICAgIHJlc3AuZGF0YS5mb3JFYWNoKHJvdyA9PiB7XG4gICAgICAgIGNvbnN0IGtleSA9IHBhcnNlSW50KHJvdy55ZWFyICsgJycgKyByb3cubW9udGggKyAnJyArIHJvdy5kYXkpO1xuICAgICAgICBpZiAoIXNvcnRlZFJvd3Nba2V5XSkgc29ydGVkUm93c1trZXldID0gW11cbiAgICAgICAgc29ydGVkUm93c1trZXldLnB1c2gocm93KTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBQcmVwYXJlIGRhdGEgZm9yIGZyb250ZW5kXG4gICAgICBPYmplY3Qua2V5cyhzb3J0ZWRSb3dzKS5mb3JFYWNoKGRhdGUgPT4ge1xuICAgICAgICBjb25zdCBuZXdEYXRlID0ge1xuICAgICAgICAgIGxhYmVsOiBzb3J0ZWRSb3dzW2RhdGVdWzBdLmRheSArICcgJyArIG1vbnRoTGFiZWxzW190aGlzLmxhbmddWyhzb3J0ZWRSb3dzW2RhdGVdWzBdLm1vbnRoIC0gMSldICsgJyAnICsgc29ydGVkUm93c1tkYXRlXVswXS55ZWFyLFxuICAgICAgICAgIG1hdGNoZXM6IFtdXG4gICAgICAgIH07XG4gICAgICAgIHNvcnRlZFJvd3NbZGF0ZV0uZm9yRWFjaChtYXRjaCA9PiB7XG4gICAgICAgICAgbGV0IHN0YXR1cyA9ICcnO1xuICAgICAgICAgIGlmIChtYXRjaC5zdGF0dXMgPT09ICdmaW5hbCcpIHtcbiAgICAgICAgICAgIHN0YXR1cyA9ICdGaW5hbCc7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0YXR1cyA9IG1hdGNoWydsaXZlLW1hdGNoJ11bJ2xpdmUtbWludXRlJ10gKyAnICc7XG4gICAgICAgICAgICBzdGF0dXMgPSBzdGF0dXMgKyAobWF0Y2hbJ2xpdmUtbWF0Y2gnXVsndG90YWwtcGVyaW9kcyddID09PSAxID8gJ1BUJyA6ICdTVCcpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgaG9tZVRvdGFsR29hbHMgPSAobWF0Y2hbJ2hvbWUtc2NvcmUnXSA/IHBhcnNlSW50KG1hdGNoWydob21lLXNjb3JlJ10pIDogMCkgKyAobWF0Y2hbJ2FnZ3JlZ2F0ZS1ob21lLXRlYW0tZ29hbHMnXSA/IHBhcnNlSW50KG1hdGNoWydhZ2dyZWdhdGUtaG9tZS10ZWFtLWdvYWxzJ10pIDogMClcbiAgICAgICAgICBjb25zdCB2aXNpdFRvdGFsR29hbHMgPSAobWF0Y2hbJ3Zpc2l0aW5nLXNjb3JlJ10gPyBwYXJzZUludChtYXRjaFsndmlzaXRpbmctc2NvcmUnXSkgOiAwKSArIChtYXRjaFsnYWdncmVnYXRlLXZpc2l0aW5nLXRlYW0tZ29hbHMnXSA/IHBhcnNlSW50KG1hdGNoWydhZ2dyZWdhdGUtdmlzaXRpbmctdGVhbS1nb2FscyddKSA6IDApXG5cbiAgICAgICAgICBsZXQgbmV3TWF0Y2ggPSB7XG4gICAgICAgICAgICByYXdEYXRhOiBtYXRjaCxcbiAgICAgICAgICAgIGhvbWU6IHtcbiAgICAgICAgICAgICAgaW1nOiBtYXRjaFsnaG9tZS10ZWFtJ11bJ3RlYW0tbG9nby11cmwnXSxcbiAgICAgICAgICAgICAgbmFtZTogbWF0Y2hbJ2hvbWUtdGVhbSddWyd0ZWFtLW5hbWUnXSxcbiAgICAgICAgICAgICAgZ29hbHM6IG1hdGNoWydob21lLXNjb3JlJ10sXG4gICAgICAgICAgICAgIGV4dHJhZ29hbHM6IG1hdGNoWydhZ2dyZWdhdGUtaG9tZS10ZWFtLWdvYWxzJ10sXG4gICAgICAgICAgICAgIHdpbm5lcjogaG9tZVRvdGFsR29hbHMgPiB2aXNpdFRvdGFsR29hbHNcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhd2F5OiB7XG4gICAgICAgICAgICAgIGltZzogbWF0Y2hbJ3Zpc2l0aW5nLXRlYW0nXVsndGVhbS1sb2dvLXVybCddLFxuICAgICAgICAgICAgICBuYW1lOiBtYXRjaFsndmlzaXRpbmctdGVhbSddWyd0ZWFtLW5hbWUnXSxcbiAgICAgICAgICAgICAgZ29hbHM6IG1hdGNoWyd2aXNpdGluZy1zY29yZSddLFxuICAgICAgICAgICAgICBleHRyYWdvYWxzOiBtYXRjaFsnYWdncmVnYXRlLXZpc2l0aW5nLXRlYW0tZ29hbHMnXSxcbiAgICAgICAgICAgICAgd2lubmVyOiBob21lVG90YWxHb2FscyA8IHZpc2l0VG90YWxHb2Fsc1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGhhc0VuZGVkOiBtYXRjaC5zdGF0dXMgPT09ICdmaW5hbCcsXG4gICAgICAgICAgICBpc0xpdmU6IG1hdGNoWydsaXZlLW1hdGNoJ11bJ2xpdmUtbWludXRlJ10gIT09IDAsXG4gICAgICAgICAgICBzdGF0dXM6IHN0YXR1cyxcbiAgICAgICAgICAgIGxpbms6ICdodHRwczovL3d3dy5nb29nbGUuY29tLmFyJyxcbiAgICAgICAgICAgIHBsYWNlOiBtYXRjaC5zdGFkaXVtXG4gICAgICAgICAgfTtcbiAgICAgICAgICBuZXdEYXRlLm1hdGNoZXMucHVzaChuZXdNYXRjaCk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgX3RoaXMuZGF0ZXMucHVzaChuZXdEYXRlKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBSdW4gcGFyZW50IGluaXQgaWYgYXZhaWxhYmxlXG4gICAgICBpZiAoX3RoaXMub25pbml0KSBfdGhpcy5vbmluaXQoX3RoaXMuZGF0ZXMpO1xuICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICBpZiAoX3RoaXMub25lcnJvcikgX3RoaXMub25lcnJvcihlcnIpO1xuICAgIH0pXG4gIH1cblxufVxuIl19