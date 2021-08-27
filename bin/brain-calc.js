#!/usr/bin/env node

import engine from '../src/index.js';
import { rules, getAnswer, checkAnswer } from '../src/games/game-calc.js';

engine(rules, getAnswer, checkAnswer);
