-- LuRavAntI database
-- Tables added here as features require them
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS strategy_sessions (
  id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  company     TEXT NOT NULL,
  email       TEXT NOT NULL,
  description TEXT NOT NULL,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
