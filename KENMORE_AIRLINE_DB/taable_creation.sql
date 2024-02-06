CREATE TABLE [DB_KENMORE_AIR].[DBO].[TB_LOGBOOK] (
[FLT_ID] TINYINT NOT NULL IDENTITY(1, 1),
[FLT_DATE] DATE NOT NULL,
[FLT_DEPARTURE] VARCHAR(30) NOT NULL, 
[FLT_OUTBOUND] VARCHAR(30) NOT NULL,
[FLT_ARRIVAL] VARCHAR(30) NOT NULL, 
[FLT_OUTBOUND_PASSANGERS] VARCHAR(150),
[FLT_ARRIVAL_PASSANGERS] VARCHAR(150),
[FLT_OUTBOUND_CARGO] TINYINT,
[FLT_ARRIVAL_CARGO] TINYINT,
[FLT_DEPARTURE_START_TIME] TIME,
[FLT_DEPARTURE_TIME] TIME,
[FLT_OUTBOUND_ARRIVAL_TIME] TIME,
[FLT_OUTBOUND_ENGINE_OFF_TIME] TIME,
[FLT_OUTBOUND_START_TIME] TIME,
[FLT_OUTBOUND_DEPARTURE_TIME] TIME,
[FLT_ARRIVAL_TIME] TIME,
[FLT_ARRIVAL_ENGINE_OFF_TIME] TIME,
[FLT_DEPARTURE_FUEL] TINYINT,
[FLT_OUTBOUND_FUEL] TINYINT,
CONSTRAINT [PK_LOGBOOK] PRIMARY KEY(FLT_DATE)
)
