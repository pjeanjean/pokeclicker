import { AchievementOption } from '../GameConstants';

import Requirement from './Requirement';

export default class QuestLineCompletedRequirement extends Requirement {
    questLineName: string;

    constructor(questLineName: string, option = AchievementOption.equal) {
        super(1, option);
        this.questLineName = questLineName;
    }

    public getProgress(): number {
        return App.game.quests.getQuestLine(this.questLineName).state() === 2 ? 1 : 0;
    }

    public hint(): string {
        return `Questline ${this.questLineName} needs to be completed.`;
    }
}
