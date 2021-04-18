import { IConfiguration } from '../iConfiguration';

export interface IStrategy {
    canApply(value: IConfiguration): boolean;
    apply(value: IConfiguration): void;
    order(value: IConfiguration): number;
}
