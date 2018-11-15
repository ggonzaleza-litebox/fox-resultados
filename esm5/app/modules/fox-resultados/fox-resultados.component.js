/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
import template from './fox-resultados.component.html';
import style from './fox-resultados.component.css';
import axios from 'axios';
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
export { FoxResultadosComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm94LXJlc3VsdGFkb3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm94LXJlc3VsdGFkb3MvIiwic291cmNlcyI6WyJhcHAvbW9kdWxlcy9mb3gtcmVzdWx0YWRvcy9mb3gtcmVzdWx0YWRvcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sUUFBUSxNQUFNLGlDQUFpQyxDQUFBO0FBQ3RELE9BQU8sS0FBSyxNQUFNLGdDQUFnQyxDQUFBO0FBQ2xELE9BQU8sS0FBSyxNQUFNLE9BQU8sQ0FBQTs7SUF3QnZCOzZCQWhCaUMsRUFBRTtvQkFDWCxJQUFJO29CQUNKLEVBQUUsR0FBRyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRTttQkFDekYsQ0FBQztvQkFDQSxRQUFRO3VCQUNMLElBQUk7cUJBUXZCLFlBQVk7cUJBQ1osRUFBRTtLQUVNOzs7O0lBRWhCLHlDQUFROzs7SUFBUjs7UUFFRSxxQkFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ25CLHFCQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDbEIscUJBQU0sVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUN0QixxQkFBTSxXQUFXLEdBQUc7WUFDbEIsSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFDLFNBQVMsRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFDLFNBQVMsRUFBQyxZQUFZLEVBQUMsU0FBUyxFQUFDLFdBQVcsRUFBQyxXQUFXLENBQUM7WUFDMUgsSUFBSSxFQUFFLENBQUMsU0FBUyxFQUFF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cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9mb3gtcmVzdWx0YWRvcy5jb21wb25lbnQuaHRtbCdcbmltcG9ydCBzdHlsZSBmcm9tICcuL2ZveC1yZXN1bHRhZG9zLmNvbXBvbmVudC5jc3MnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1mb3gtcmVzdWx0YWRvcycsXG4gIHRlbXBsYXRlOiB0ZW1wbGF0ZSArICcnLFxuICBzdHlsZXM6IFtzdHlsZSArICcnXVxufSlcbmV4cG9ydCBjbGFzcyBGb3hSZXN1bHRhZG9zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgY29tcGV0aXRpb25pZDogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIGxhbmc6IHN0cmluZyA9ICdlcyc7XG4gIEBJbnB1dCgpIGRhdGU6IHN0cmluZyA9ICcnICsgKG5ldyBEYXRlKCkpLmdldEZ1bGxZZWFyKCkgKyAoKG5ldyBEYXRlKCkpLmdldE1vbnRoKCkgKyAxKSArIChuZXcgRGF0ZSgpKS5nZXREYXRlKCk7XG4gIEBJbnB1dCgpIG1heDogbnVtYmVyID0gMDtcbiAgQElucHV0KCkgdHlwZTogc3RyaW5nID0gJ2Z1dGJvbCc7XG4gIEBJbnB1dCgpIGNvdW50cnk6IHN0cmluZyA9ICdhcic7XG5cbiAgQElucHV0KCkgb25pbml0OiBGdW5jdGlvbjtcbiAgQElucHV0KCkgb25lcnJvcjogRnVuY3Rpb247XG4gIEBJbnB1dCgpIG9uTWF0Y2hDbGljazogRnVuY3Rpb247XG4gIEBJbnB1dCgpIG9uV2F0Y2hMaXZlOiBGdW5jdGlvbjtcbiAgQElucHV0KCkgb25XYXRjaDogRnVuY3Rpb247XG5cbiAgdGl0bGUgPSAnUmVzdWx0YWRvcyc7XG4gIGRhdGVzID0gW107XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8vIFVzZWZ1bGwgdmFyaWFibGVzXG4gICAgY29uc3QgX3RoaXMgPSB0aGlzO1xuICAgIGNvbnN0IHBhcmFtcyA9IHt9O1xuICAgIGNvbnN0IHNvcnRlZFJvd3MgPSB7fTtcbiAgICBjb25zdCBtb250aExhYmVscyA9IHtcbiAgICAgICdlcyc6IFsnRW5lcm8nLCdGZWJyZXJvJywnTWFyem8nLCdBYnJpbCcsJ01heW8nLCdKdW5pbycsICdKdWxpbycsJ0F1Z29zdG8nLCdTZXB0aWVtYnJlJywnT2N0dWJyZScsJ05vdmllbWJyZScsJ0RpY2llbWJyZSddLFxuICAgICAgJ3B0JzogWydKYW5laXJvJywgJ0ZldmVyZWlybycsICdNYXLDp28nLCAnQWJyaWwnLCAnTWFpbycsICdKdW5obycsICdKdWxobycsICdBZ29zdG8nLCAnU2V0ZW1icm8nLCAnT3V0dWJybycsICdOb3ZlbWJybycsICdEZXplbWJybyddXG4gICAgfTtcbiAgICBjb25zdCB0b2RheSA9IHBhcnNlSW50KCcnICsgKG5ldyBEYXRlKCkpLmdldEZ1bGxZZWFyKCkgKyAoKG5ldyBEYXRlKCkpLmdldE1vbnRoKCkgKyAxKSArIChuZXcgRGF0ZSgpKS5nZXREYXRlKCkpXG5cbiAgICAvLyBBUEkgUGFyYW1zIHNldHVwXG4gICAgaWYgKF90aGlzLmNvdW50cnkpIHBhcmFtc1snY291bnRyeS1jb2RlJ10gPSBfdGhpcy5jb3VudHJ5O1xuICAgIGlmIChfdGhpcy50eXBlKSBwYXJhbXNbJ3R5cGUnXSA9IF90aGlzLnR5cGU7XG4gICAgaWYgKF90aGlzLmRhdGUpIHBhcmFtc1snZGF0ZXMtYXJyYXknXSA9IF90aGlzLmRhdGU7XG4gICAgaWYgKF90aGlzLmNvbXBldGl0aW9uaWQpIHBhcmFtc1snY29tcGV0aXRpb24taWQnXSA9IF90aGlzLmNvbXBldGl0aW9uaWQ7XG5cbiAgICBheGlvcy5nZXQoJ2h0dHBzOi8vc3RhdHMuZm94c3BvcnRzbGEuY29tL3N0YXRzL2dldF9yZXN1bHRzX3YyJywge1xuICAgICAgcGFyYW1zOiBwYXJhbXNcbiAgICB9KS50aGVuKGZ1bmN0aW9uKHJlc3ApIHtcblxuICAgICAgLy8gU29ydCByZXN1bHRzIGFuZCBncm91cCBieSBkYXRlXG4gICAgICByZXNwLmRhdGEuZm9yRWFjaChyb3cgPT4ge1xuICAgICAgICBjb25zdCBrZXkgPSBwYXJzZUludChyb3cueWVhciArICcnICsgcm93Lm1vbnRoICsgJycgKyByb3cuZGF5KTtcbiAgICAgICAgaWYgKCFzb3J0ZWRSb3dzW2tleV0pIHNvcnRlZFJvd3Nba2V5XSA9IFtdXG4gICAgICAgIHNvcnRlZFJvd3Nba2V5XS5wdXNoKHJvdyk7XG4gICAgICB9KTtcblxuICAgICAgLy8gUHJlcGFyZSBkYXRhIGZvciBmcm9udGVuZFxuICAgICAgT2JqZWN0LmtleXMoc29ydGVkUm93cykuZm9yRWFjaChkYXRlID0+IHtcbiAgICAgICAgY29uc3QgbmV3RGF0ZSA9IHtcbiAgICAgICAgICBsYWJlbDogc29ydGVkUm93c1tkYXRlXVswXS5kYXkgKyAnICcgKyBtb250aExhYmVsc1tfdGhpcy5sYW5nXVsoc29ydGVkUm93c1tkYXRlXVswXS5tb250aCAtIDEpXSArICcgJyArIHNvcnRlZFJvd3NbZGF0ZV1bMF0ueWVhcixcbiAgICAgICAgICBtYXRjaGVzOiBbXVxuICAgICAgICB9O1xuICAgICAgICBzb3J0ZWRSb3dzW2RhdGVdLmZvckVhY2gobWF0Y2ggPT4ge1xuICAgICAgICAgIGxldCBzdGF0dXMgPSAnJztcbiAgICAgICAgICBpZiAobWF0Y2guc3RhdHVzID09PSAnZmluYWwnKSB7XG4gICAgICAgICAgICBzdGF0dXMgPSAnRmluYWwnO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdGF0dXMgPSBtYXRjaFsnbGl2ZS1tYXRjaCddWydsaXZlLW1pbnV0ZSddICsgJyAnO1xuICAgICAgICAgICAgc3RhdHVzID0gc3RhdHVzICsgKG1hdGNoWydsaXZlLW1hdGNoJ11bJ3RvdGFsLXBlcmlvZHMnXSA9PT0gMSA/ICdQVCcgOiAnU1QnKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGhvbWVUb3RhbEdvYWxzID0gKG1hdGNoWydob21lLXNjb3JlJ10gPyBwYXJzZUludChtYXRjaFsnaG9tZS1zY29yZSddKSA6IDApICsgKG1hdGNoWydhZ2dyZWdhdGUtaG9tZS10ZWFtLWdvYWxzJ10gPyBwYXJzZUludChtYXRjaFsnYWdncmVnYXRlLWhvbWUtdGVhbS1nb2FscyddKSA6IDApXG4gICAgICAgICAgY29uc3QgdmlzaXRUb3RhbEdvYWxzID0gKG1hdGNoWyd2aXNpdGluZy1zY29yZSddID8gcGFyc2VJbnQobWF0Y2hbJ3Zpc2l0aW5nLXNjb3JlJ10pIDogMCkgKyAobWF0Y2hbJ2FnZ3JlZ2F0ZS12aXNpdGluZy10ZWFtLWdvYWxzJ10gPyBwYXJzZUludChtYXRjaFsnYWdncmVnYXRlLXZpc2l0aW5nLXRlYW0tZ29hbHMnXSkgOiAwKVxuXG4gICAgICAgICAgbGV0IG5ld01hdGNoID0ge1xuICAgICAgICAgICAgcmF3RGF0YTogbWF0Y2gsXG4gICAgICAgICAgICBob21lOiB7XG4gICAgICAgICAgICAgIGltZzogbWF0Y2hbJ2hvbWUtdGVhbSddWyd0ZWFtLWxvZ28tdXJsJ10sXG4gICAgICAgICAgICAgIG5hbWU6IG1hdGNoWydob21lLXRlYW0nXVsndGVhbS1uYW1lJ10sXG4gICAgICAgICAgICAgIGdvYWxzOiBtYXRjaFsnaG9tZS1zY29yZSddLFxuICAgICAgICAgICAgICBleHRyYWdvYWxzOiBtYXRjaFsnYWdncmVnYXRlLWhvbWUtdGVhbS1nb2FscyddLFxuICAgICAgICAgICAgICB3aW5uZXI6IGhvbWVUb3RhbEdvYWxzID4gdmlzaXRUb3RhbEdvYWxzXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYXdheToge1xuICAgICAgICAgICAgICBpbWc6IG1hdGNoWyd2aXNpdGluZy10ZWFtJ11bJ3RlYW0tbG9nby11cmwnXSxcbiAgICAgICAgICAgICAgbmFtZTogbWF0Y2hbJ3Zpc2l0aW5nLXRlYW0nXVsndGVhbS1uYW1lJ10sXG4gICAgICAgICAgICAgIGdvYWxzOiBtYXRjaFsndmlzaXRpbmctc2NvcmUnXSxcbiAgICAgICAgICAgICAgZXh0cmFnb2FsczogbWF0Y2hbJ2FnZ3JlZ2F0ZS12aXNpdGluZy10ZWFtLWdvYWxzJ10sXG4gICAgICAgICAgICAgIHdpbm5lcjogaG9tZVRvdGFsR29hbHMgPCB2aXNpdFRvdGFsR29hbHNcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBoYXNFbmRlZDogbWF0Y2guc3RhdHVzID09PSAnZmluYWwnLFxuICAgICAgICAgICAgaXNMaXZlOiBtYXRjaFsnbGl2ZS1tYXRjaCddWydsaXZlLW1pbnV0ZSddICE9PSAwLFxuICAgICAgICAgICAgc3RhdHVzOiBzdGF0dXMsXG4gICAgICAgICAgICBsaW5rOiAnaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS5hcicsXG4gICAgICAgICAgICBwbGFjZTogbWF0Y2guc3RhZGl1bVxuICAgICAgICAgIH07XG4gICAgICAgICAgbmV3RGF0ZS5tYXRjaGVzLnB1c2gobmV3TWF0Y2gpO1xuICAgICAgICB9KVxuXG4gICAgICAgIF90aGlzLmRhdGVzLnB1c2gobmV3RGF0ZSk7XG4gICAgICB9KTtcblxuICAgICAgLy8gUnVuIHBhcmVudCBpbml0IGlmIGF2YWlsYWJsZVxuICAgICAgaWYgKF90aGlzLm9uaW5pdCkgX3RoaXMub25pbml0KF90aGlzLmRhdGVzKTtcbiAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgaWYgKF90aGlzLm9uZXJyb3IpIF90aGlzLm9uZXJyb3IoZXJyKTtcbiAgICB9KVxuICB9XG5cbn1cbiJdfQ==