// conversion factor
const factor = 0.621371

export function getTimestamp(date: Date): number {
    return Math.round(date.getTime()/1000);
}

export function convertKmToMiles(kilometers: number): number {
    return kilometers * factor;
}

export function convertMilesToKm(miles: number): number {
    return miles / factor;
}