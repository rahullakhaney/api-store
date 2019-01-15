import Nick from "nickjs"
import Buster from "phantombuster"

declare class StoreUtilities2 {
	public ERROR_CODES: { [error in keyof typeof ERRORS]: number }
	public constructor(buster: Buster)
	public log(message: string, type?: string): void
	public validateArguments(): { [key: string]: unknown }
	public isUrl(url: string): boolean
	public getRawCsv(url: string, printLogs?: boolean): Promise<Array<{ [key: string]: unknown }>>
	public extractCsvRows(url: string, columnName?: string, printLogs?: boolean): Array<string|{ [key: string]: unknown }>
	public getDataFromCsv(url: string, columnName?: string|string[], printLogs?: boolean): Promise<string[]>
	public getDataFromCsv2(url: string, columnName?: unknown|string|string[], printLogs?: boolean): Promise<string[]>
	public checkTimeLeft(): Promise<{ timeLeft: boolean, message: string|number }>
	public getIP(): Promise<string>|Promise<void>
	public saveResults(jsonResult: Array<{ [key: string]: unknown }>, csvResult: Array<{ [key: string]: unknown }>, name?: "result"|unknown , schema?: string[]|null, saveJson?: boolean): Promise<void>
	public getDb(filename: string, parseContent?: boolean): Promise<{ [key: string]: unknown }[]>
	public saveResult(result: Array<{ [key: string]: unknown }>, csvName?: "result", schema?: string[]): Promise<void>
	public checkArguments(args: Array<{ [key: string]: unknown }>): Array<unknown>
	public adjustUrl(url: string, domain: string): string
	public checkDb(str: string, db: Array<{ [key: string]: unknown }>, property: string): boolean
	public filterRightOuter(left: Array<{ [key: string]: unknown }>, right: Array<{ [key: string]: unknown }>): Array<{ [key: string]: unknown }>
	public notifyByMail(): Promise<void>
}

declare const enum ERRORS {
	EMPTY_SPREADSHEET = 71,
	CSV_NOT_PUBLIC = 72,
	GO_NOT_ACCESSIBLE = 75,
	BAD_INPUT = 76,
	LINKEDIN_BAD_COOKIE = 83,
	LINKEDIN_EXPIRED_COOKIE = 84,
	LINKEDIN_BLOCKED_ACCOUNT = 85,
	LINKEDIN_DEFAULT_COOKIE = 82,
	LINKEDIN_INVALID_COOKIE = 87,
	SLACK_DEFAULT_COOKIE = 88,
	SLACK_BAD_COOKIE = 89,
	SLACK_DEFAULT_WORKSPACE = 90,
	SLACK_BAD_WORKSPACE = 91,
	TWITTER_RATE_LIMIT = 92,
	TWITTER_BAD_COOKIE = 93,
	TWITTER_EXPIRED_COOKIE = 94,
	TWITTER_BLOCKED_ACCOUNT = 95,
	TWITTER_DEFAULT_COOKIE = 96,
	TWITTER_INVALID_COOKIE = 97,
	MEDIUM_DEFAULT_COOKIE = 98,
	MEDIUM_BAD_COOKIE = 99,
	INSTAGRAM_BAD_COOKIE = 103,
	INSTAGRAM_EXPIRED_COOKIE = 104,
	INSTAGRAM_BLOCKED_ACCOUNT = 105,
	INSTAGRAM_DEFAULT_COOKIE = 106,
	INSTAGRAM_INVALID_COOKIE = 107,
	FACEBOOK_BAD_COOKIE = 113,
	FACEBOOK_EXPIRED_COOKIE = 114,
	FACEBOOK_BLOCKED_ACCOUNT = 115,
	FACEBOOK_DEFAULT_COOKIE = 116,
	FACEBOOK_INVALID_COOKIE = 117,
	FACEBOOK_TIMEOUT = 118,
}

export = StoreUtilities2