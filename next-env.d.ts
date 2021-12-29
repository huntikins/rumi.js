/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information.

type Deck = {
    id: string | number,
    value: string | number,
    suit: string,
    points: number,
    front: string,
    back: string
  }

type Player = {
    id: string;
    username: string;
    hand: Deck[];
    score: number;
    turn: boolean;
    icon: string;
    isBuying: boolean;
    discardNeeded: boolean;
}

type Round = {
    round: number, 
    sets: number, 
    runs: number, 
    cardCount: number, 
    discard: boolean
}