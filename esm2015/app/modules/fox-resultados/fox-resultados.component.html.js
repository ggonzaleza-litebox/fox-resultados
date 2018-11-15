/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
export default `
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm94LXJlc3VsdGFkb3MuY29tcG9uZW50Lmh0bWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3gtcmVzdWx0YWRvcy8iLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2ZveC1yZXN1bHRhZG9zL2ZveC1yZXN1bHRhZG9zLmNvbXBvbmVudC5odG1sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxlQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztXQTZFSixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgYFxuPHNlY3Rpb24gY2xhc3M9XCJyZXN1bHRhZG9zLXdyYXBwZXJcIj5cblx0PGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZCBwLTBcIj5cblx0XHQ8ZGl2IGNsYXNzPVwicm93XCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XG5cdFx0XHRcdDxoMT57e3RpdGxlfX08L2gxPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cblx0XHQ8ZGl2IGNsYXNzPVwicmVzdWx0YWRvcy10YWJsZVwiICpuZ0Zvcj1cImxldCBkYXRlIG9mIGRhdGVzXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwicm93XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwicmVzdWx0YWRvcy10YWJsZV9kYXRlXCI+XG5cdFx0XHRcdFx0XHQ8aDI+e3tkYXRlLmxhYmVsfX08L2gyPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXG5cdFx0XHQ8ZGl2IGNsYXNzPVwie3sncmVzdWx0YWRvcy10YWJsZV9tYXRjaGVzJyArIChtYXRjaC5pc0xpdmUgPyAnIGxpdmUnIDogKCFtYXRjaC5pc0xpdmUgJiYgIW1hdGNoLmhhc0VuZGVkID8gJyBub3Qtc3RhcnRlZCcgOiAnJykpfX1cIiAqbmdGb3I9XCJsZXQgbWF0Y2ggb2YgZGF0ZS5tYXRjaGVzXCI+XG5cblx0XHRcdFx0PGRpdiBjbGFzcz1cInJvdyBuby1ndXR0ZXJzXCIgKGNsaWNrKT1cIiFtYXRjaC5pc0xpdmUgJiYgIW1hdGNoLmhhc0VuZGVkID8gb25NYXRjaENsaWNrKG1hdGNoKSA6ICcnXCI+XG5cdFx0XHRcdFx0PCEtLSBNYXRjaCBUZWFtcyAtLT5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLW1kLTQgY29sLThcIiA+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwie3sndGVhbScgKyAobWF0Y2guaG9tZS53aW5uZXIgPyAnIHdvbicgOiAnJyl9fVwiPlxuXHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cInt7bWF0Y2guaG9tZS5pbWd9fVwiIC8+XG5cdFx0XHRcdFx0XHRcdDxzcGFuPnt7bWF0Y2guaG9tZS5uYW1lfX08L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ7eyd0ZWFtJyArIChtYXRjaC5hd2F5Lndpbm5lciA/ICcgd29uJyA6ICcnKX19XCI+XG5cdFx0XHRcdFx0XHRcdDxpbWcgc3JjPVwie3ttYXRjaC5hd2F5LmltZ319XCIgLz5cblx0XHRcdFx0XHRcdFx0PHNwYW4+e3ttYXRjaC5hd2F5Lm5hbWV9fTwvc3Bhbj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0PCEtLSBNYXRjaCBHb2FscyAtLT5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLW1kLTEgY29sLTIgdGV4dC1jZW50ZXIgdGV4dC1tZC1sZWZ0XCI+XG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cInt7J2dvYWxzJyArIChtYXRjaC5ob21lLndpbm5lciA/ICcgd29uJyA6ICcnKX19XCI+e3ttYXRjaC5ob21lLmdvYWxzfX08c3VwICpuZ0lmPVwibWF0Y2guaG9tZS5leHRyYWdvYWxzXCI+e3ttYXRjaC5ob21lLmV4dHJhZ29hbHN9fTwvc3VwPjwvc3Bhbj5cblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwie3snZ29hbHMnICsgKG1hdGNoLmF3YXkud2lubmVyID8gJyB3b24nIDogJycpfX1cIj57e21hdGNoLmF3YXkuZ29hbHN9fTxzdXAgKm5nSWY9XCJtYXRjaC5hd2F5LmV4dHJhZ29hbHNcIj57e21hdGNoLmF3YXkuZXh0cmFnb2Fsc319PC9zdXA+PC9zcGFuPlxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0PCEtLSBNYXRjaCBTdGF0dXMgLS0+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC1tZC0zIGNvbC0yIGp1c3RpZnktY29udGVudC1jZW50ZXIgdGV4dC1jZW50ZXIgdGV4dC1tZC1sZWZ0XCI+XG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cInN0YXR1c1wiPnt7bWF0Y2guc3RhdHVzfX08L3NwYW4+XG5cdFx0XHRcdFx0XHQ8c3BhbiAqbmdJZj1cIiFtYXRjaC5pc0xpdmUgJiYgIW1hdGNoLmhhc0VuZGVkICYmIG1hdGNoLnBsYWNlXCIgY2xhc3M9XCJwbGFjZVwiPnt7bWF0Y2gucGxhY2V9fTwvc3Bhbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdDwhLS0gV2F0Y2ggT25saW5lIC0tPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtbWQtMyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG5cdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVwiY3RhLXdhdGNoIGludmVyc2VcIiAqbmdJZj1cIm1hdGNoLmhhc0VuZGVkXCIgKGNsaWNrKT1cIm9uV2F0Y2gobWF0Y2gpXCI+XG5cdFx0XHRcdFx0XHRcdDxzdmcgY2xhc3M9XCJwbGF5LWljb25cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCI4XCIgaGVpZ2h0PVwiMTBcIiB2aWV3Qm94PVwiMCAwIDggMTBcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZyBmaWxsPVwibm9uZVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGcgY2xhc3M9XCJwbGF5LWljb25fZmlsbFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8cG9seWdvbiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTI2IC0xMCl0cmFuc2xhdGUoMjYgMTApdHJhbnNsYXRlKDQgNSlyb3RhdGUoOTApdHJhbnNsYXRlKC00IC01KVwiIHBvaW50cz1cIjQgMSA5IDkgLTEgOVwiLz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0XHRcdDwvc3ZnPlxuXHRcdFx0XHRcdFx0XHRSZXZpdmVsb1xuXHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImN0YS13YXRjaFwiICpuZ0lmPVwibWF0Y2guaXNMaXZlXCIgKGNsaWNrKT1cIm9uV2F0Y2hMaXZlKG1hdGNoKVwiPlxuXHRcdFx0XHRcdFx0XHQ8c3ZnIGNsYXNzPVwicGxheS1pY29uXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiOFwiIGhlaWdodD1cIjEwXCIgdmlld0JveD1cIjAgMCA4IDEwXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGcgZmlsbD1cIm5vbmVcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxnIGNsYXNzPVwicGxheS1pY29uX2ZpbGxcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHBvbHlnb24gdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0yNiAtMTApdHJhbnNsYXRlKDI2IDEwKXRyYW5zbGF0ZSg0IDUpcm90YXRlKDkwKXRyYW5zbGF0ZSgtNCAtNSlcIiBwb2ludHM9XCI0IDEgOSA5IC0xIDlcIi8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2c+XG5cdFx0XHRcdFx0XHRcdFx0PC9nPlxuXHRcdFx0XHRcdFx0XHQ8L3N2Zz5cblx0XHRcdFx0XHRcdFx0TWlyYWxvIGVuIHZpdm9cblx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0PC9kaXY+XG5cdFx0XHRcblx0XHQ8L2Rpdj5cblx0PC9kaXY+XG5cblxuXHRcbjwvc2VjdGlvbj5gXG4iXX0=