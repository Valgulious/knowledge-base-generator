import { makeAutoObservable } from 'mobx';
import Period from 'domain/entity/period/Period';

export default class PeriodStore {
    public periods: Period[] = [];

    public indPeriods: Period[] = [];

    constructor() {
        makeAutoObservable(this, undefined, {
            autoBind: true,
        });
    }

    public setPeriods(periods: Period[]): void {
        this.periods = periods;
    }

    public setIndPeriods(periods: Period[]): void {
        this.indPeriods = periods;
    }
}
