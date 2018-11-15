/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
export default "\n<section class=\"resultados-wrapper\">\n\t<div class=\"container-fluid p-0\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-12\">\n\t\t\t\t<h1>{{title}}</h1>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"resultados-table\" *ngFor=\"let date of dates\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-12\">\n\t\t\t\t\t<div class=\"resultados-table_date\">\n\t\t\t\t\t\t<h2>{{date.label}}</h2>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"{{'resultados-table_matches' + (match.isLive ? ' live' : (!match.isLive && !match.hasEnded ? ' not-started' : ''))}}\" *ngFor=\"let match of date.matches\">\n\n\t\t\t\t<div class=\"row no-gutters\" (click)=\"!match.isLive && !match.hasEnded ? onMatchClick(match) : ''\">\n\t\t\t\t\t<!-- Match Teams -->\n\t\t\t\t\t<div class=\"col-md-4 col-8\" >\n\t\t\t\t\t\t<div class=\"{{'team' + (match.home.winner ? ' won' : '')}}\">\n\t\t\t\t\t\t\t<img src=\"{{match.home.img}}\" />\n\t\t\t\t\t\t\t<span>{{match.home.name}}</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"{{'team' + (match.away.winner ? ' won' : '')}}\">\n\t\t\t\t\t\t\t<img src=\"{{match.away.img}}\" />\n\t\t\t\t\t\t\t<span>{{match.away.name}}</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<!-- Match Goals -->\n\t\t\t\t\t<div class=\"col-md-1 col-2 text-center text-md-left\">\n\t\t\t\t\t\t<span class=\"{{'goals' + (match.home.winner ? ' won' : '')}}\">{{match.home.goals}}<sup *ngIf=\"match.home.extragoals\">{{match.home.extragoals}}</sup></span>\n\t\t\t\t\t\t<span class=\"{{'goals' + (match.away.winner ? ' won' : '')}}\">{{match.away.goals}}<sup *ngIf=\"match.away.extragoals\">{{match.away.extragoals}}</sup></span>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<!-- Match Status -->\n\t\t\t\t\t<div class=\"col-md-3 col-2 justify-content-center text-center text-md-left\">\n\t\t\t\t\t\t<span class=\"status\">{{match.status}}</span>\n\t\t\t\t\t\t<span *ngIf=\"!match.isLive && !match.hasEnded && match.place\" class=\"place\">{{match.place}}</span>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<!-- Watch Online -->\n\t\t\t\t\t<div class=\"col-md-3 justify-content-center\">\n\t\t\t\t\t\t<button class=\"cta-watch inverse\" *ngIf=\"match.hasEnded\" (click)=\"onWatch(match)\">\n\t\t\t\t\t\t\t<svg class=\"play-icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"8\" height=\"10\" viewBox=\"0 0 8 10\">\n\t\t\t\t\t\t\t\t<g fill=\"none\">\n\t\t\t\t\t\t\t\t\t<g class=\"play-icon_fill\">\n\t\t\t\t\t\t\t\t\t\t<polygon transform=\"translate(-26 -10)translate(26 10)translate(4 5)rotate(90)translate(-4 -5)\" points=\"4 1 9 9 -1 9\"/>\n\t\t\t\t\t\t\t\t\t</g>\n\t\t\t\t\t\t\t\t</g>\n\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\tRevivelo\n\t\t\t\t\t\t</button>\n\t\t\t\t\t\t<button type=\"button\" class=\"cta-watch\" *ngIf=\"match.isLive\" (click)=\"onWatchLive(match)\">\n\t\t\t\t\t\t\t<svg class=\"play-icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"8\" height=\"10\" viewBox=\"0 0 8 10\">\n\t\t\t\t\t\t\t\t<g fill=\"none\">\n\t\t\t\t\t\t\t\t\t<g class=\"play-icon_fill\">\n\t\t\t\t\t\t\t\t\t\t<polygon transform=\"translate(-26 -10)translate(26 10)translate(4 5)rotate(90)translate(-4 -5)\" points=\"4 1 9 9 -1 9\"/>\n\t\t\t\t\t\t\t\t\t</g>\n\t\t\t\t\t\t\t\t</g>\n\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\tMiralo en vivo\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t\t\n\t\t</div>\n\t</div>\n\n\n\t\n</section>";

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm94LXJlc3VsdGFkb3MuY29tcG9uZW50Lmh0bWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3gtcmVzdWx0YWRvcy8iLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2ZveC1yZXN1bHRhZG9zL2ZveC1yZXN1bHRhZG9zLmNvbXBvbmVudC5odG1sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxlQUFlLGd5R0E2RUosQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGBcbjxzZWN0aW9uIGNsYXNzPVwicmVzdWx0YWRvcy13cmFwcGVyXCI+XG5cdDxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWQgcC0wXCI+XG5cdFx0PGRpdiBjbGFzcz1cInJvd1wiPlxuXHRcdFx0PGRpdiBjbGFzcz1cImNvbC0xMlwiPlxuXHRcdFx0XHQ8aDE+e3t0aXRsZX19PC9oMT5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXG5cdFx0PGRpdiBjbGFzcz1cInJlc3VsdGFkb3MtdGFibGVcIiAqbmdGb3I9XCJsZXQgZGF0ZSBvZiBkYXRlc1wiPlxuXHRcdFx0PGRpdiBjbGFzcz1cInJvd1wiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cInJlc3VsdGFkb3MtdGFibGVfZGF0ZVwiPlxuXHRcdFx0XHRcdFx0PGgyPnt7ZGF0ZS5sYWJlbH19PC9oMj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdFx0PGRpdiBjbGFzcz1cInt7J3Jlc3VsdGFkb3MtdGFibGVfbWF0Y2hlcycgKyAobWF0Y2guaXNMaXZlID8gJyBsaXZlJyA6ICghbWF0Y2guaXNMaXZlICYmICFtYXRjaC5oYXNFbmRlZCA/ICcgbm90LXN0YXJ0ZWQnIDogJycpKX19XCIgKm5nRm9yPVwibGV0IG1hdGNoIG9mIGRhdGUubWF0Y2hlc1wiPlxuXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJyb3cgbm8tZ3V0dGVyc1wiIChjbGljayk9XCIhbWF0Y2guaXNMaXZlICYmICFtYXRjaC5oYXNFbmRlZCA/IG9uTWF0Y2hDbGljayhtYXRjaCkgOiAnJ1wiPlxuXHRcdFx0XHRcdDwhLS0gTWF0Y2ggVGVhbXMgLS0+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC1tZC00IGNvbC04XCIgPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInt7J3RlYW0nICsgKG1hdGNoLmhvbWUud2lubmVyID8gJyB3b24nIDogJycpfX1cIj5cblx0XHRcdFx0XHRcdFx0PGltZyBzcmM9XCJ7e21hdGNoLmhvbWUuaW1nfX1cIiAvPlxuXHRcdFx0XHRcdFx0XHQ8c3Bhbj57e21hdGNoLmhvbWUubmFtZX19PC9zcGFuPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwie3sndGVhbScgKyAobWF0Y2guYXdheS53aW5uZXIgPyAnIHdvbicgOiAnJyl9fVwiPlxuXHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cInt7bWF0Y2guYXdheS5pbWd9fVwiIC8+XG5cdFx0XHRcdFx0XHRcdDxzcGFuPnt7bWF0Y2guYXdheS5uYW1lfX08L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdDwhLS0gTWF0Y2ggR29hbHMgLS0+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC1tZC0xIGNvbC0yIHRleHQtY2VudGVyIHRleHQtbWQtbGVmdFwiPlxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJ7eydnb2FscycgKyAobWF0Y2guaG9tZS53aW5uZXIgPyAnIHdvbicgOiAnJyl9fVwiPnt7bWF0Y2guaG9tZS5nb2Fsc319PHN1cCAqbmdJZj1cIm1hdGNoLmhvbWUuZXh0cmFnb2Fsc1wiPnt7bWF0Y2guaG9tZS5leHRyYWdvYWxzfX08L3N1cD48L3NwYW4+XG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cInt7J2dvYWxzJyArIChtYXRjaC5hd2F5Lndpbm5lciA/ICcgd29uJyA6ICcnKX19XCI+e3ttYXRjaC5hd2F5LmdvYWxzfX08c3VwICpuZ0lmPVwibWF0Y2guYXdheS5leHRyYWdvYWxzXCI+e3ttYXRjaC5hd2F5LmV4dHJhZ29hbHN9fTwvc3VwPjwvc3Bhbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdDwhLS0gTWF0Y2ggU3RhdHVzIC0tPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtbWQtMyBjb2wtMiBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHRleHQtY2VudGVyIHRleHQtbWQtbGVmdFwiPlxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJzdGF0dXNcIj57e21hdGNoLnN0YXR1c319PC9zcGFuPlxuXHRcdFx0XHRcdFx0PHNwYW4gKm5nSWY9XCIhbWF0Y2guaXNMaXZlICYmICFtYXRjaC5oYXNFbmRlZCAmJiBtYXRjaC5wbGFjZVwiIGNsYXNzPVwicGxhY2VcIj57e21hdGNoLnBsYWNlfX08L3NwYW4+XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHQ8IS0tIFdhdGNoIE9ubGluZSAtLT5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLW1kLTMganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cImN0YS13YXRjaCBpbnZlcnNlXCIgKm5nSWY9XCJtYXRjaC5oYXNFbmRlZFwiIChjbGljayk9XCJvbldhdGNoKG1hdGNoKVwiPlxuXHRcdFx0XHRcdFx0XHQ8c3ZnIGNsYXNzPVwicGxheS1pY29uXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiOFwiIGhlaWdodD1cIjEwXCIgdmlld0JveD1cIjAgMCA4IDEwXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGcgZmlsbD1cIm5vbmVcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxnIGNsYXNzPVwicGxheS1pY29uX2ZpbGxcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHBvbHlnb24gdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0yNiAtMTApdHJhbnNsYXRlKDI2IDEwKXRyYW5zbGF0ZSg0IDUpcm90YXRlKDkwKXRyYW5zbGF0ZSgtNCAtNSlcIiBwb2ludHM9XCI0IDEgOSA5IC0xIDlcIi8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdFx0XHQ8L3N2Zz5cblx0XHRcdFx0XHRcdFx0UmV2aXZlbG9cblx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjdGEtd2F0Y2hcIiAqbmdJZj1cIm1hdGNoLmlzTGl2ZVwiIChjbGljayk9XCJvbldhdGNoTGl2ZShtYXRjaClcIj5cblx0XHRcdFx0XHRcdFx0PHN2ZyBjbGFzcz1cInBsYXktaWNvblwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjhcIiBoZWlnaHQ9XCIxMFwiIHZpZXdCb3g9XCIwIDAgOCAxMFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxnIGZpbGw9XCJub25lXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZyBjbGFzcz1cInBsYXktaWNvbl9maWxsXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxwb2x5Z29uIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMjYgLTEwKXRyYW5zbGF0ZSgyNiAxMCl0cmFuc2xhdGUoNCA1KXJvdGF0ZSg5MCl0cmFuc2xhdGUoLTQgLTUpXCIgcG9pbnRzPVwiNCAxIDkgOSAtMSA5XCIvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0XHRcdFx0PC9zdmc+XG5cdFx0XHRcdFx0XHRcdE1pcmFsbyBlbiB2aXZvXG5cdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdDwvZGl2PlxuXHRcdFx0XG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuXG5cblx0XG48L3NlY3Rpb24+YFxuIl19