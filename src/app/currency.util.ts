import { CurrencyMaskConfig } from 'ng2-currency-mask';

export class CurrencyUtil {

    public static CustomCurrencyMaskConfig: CurrencyMaskConfig = {
        align: "right",
        allowNegative: true,
        decimal: ",",
        precision: 2,
        prefix: "R$ ",
        suffix: "",
        thousands: "."
    };
}