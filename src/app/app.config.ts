export const Config = {
    cycleDefine : ['一次', '每日', '每周', '每月']
};

export class Item {
    content: string;
    complete: boolean;
    cycle: number;
    constructor(newItem) {
        this.content = newItem.content;
        this.complete = false;
        this.cycle = newItem.cycle ? newItem.cycle : 1; // 1：一次，2：每日，3：每周，4：每月
    }
}
