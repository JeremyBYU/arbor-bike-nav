declare var require: {
    <T>(path: string): T;
    (paths: string[], callback: (...modules: any[]) => void): void;
    ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void) => void;
};

export interface markers {
    latlong: [number, number]
    text: string
}

export interface paths {
    latlong: [[number, number]]
    text: string
}