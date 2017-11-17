import { IAddOptions, IAddTorrent, IFree, ISession, ISettings, IStats, IStatus, ITorrent, ITorrentRes } from './models';
export declare class SettingsConfig {
    host: string;
    port: number;
    username: string;
    password: string;
    ssl: boolean;
    url: string;
    constructor(settings?: ISettings);
}
export declare class Transmission {
    readonly status: IStatus;
    private transmission;
    constructor(settings: ISettings);
    waitForState(id: number, target: string): Promise<ITorrent>;
    move(ids: number[] | number, location: string, move?: boolean): Promise<any>;
    remove(ids: number[] | number, del?: boolean): Promise<any>;
    active(): Promise<ITorrentRes>;
    stop(ids: number[] | number): Promise<any>;
    start(ids: number[] | number): Promise<any>;
    startNow(ids: number[] | number): Promise<any>;
    verify(ids: number[] | number): Promise<{}>;
    reannounce(ids: number[] | number): Promise<{}>;
    session(session?: ISession): Promise<{}>;
    sessionStats(): Promise<IStats>;
    freeSpace(path: string): Promise<IFree>;
    get(ids?: number[] | number): Promise<ITorrent[]>;
    addUrl(url: string, options?: IAddOptions): Promise<IAddTorrent>;
    addFile(path: string, options?: IAddOptions): Promise<IAddTorrent>;
}
