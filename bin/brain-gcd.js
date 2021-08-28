#!/usr/bin/env node

import engine from '../src/index.js';
import { rules, getAnswer, checkAnswer } from '../src/games/game-gcd.js';

engine(rules, getAnswer, checkAnswer);
