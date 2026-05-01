import type { QueryKey, UseMutationOptions, UseMutationResult, UseQueryOptions, UseQueryResult } from "@tanstack/react-query";
import type { DownloadRequest, DownloadResponse, ErrorResponse, FormatsResponse, GetHistoryParams, HealthStatus, HistoryResponse, StatsResponse, SuccessMessage, VideoInfo, VideoInfoRequest } from "./api.schemas";
import { customFetch } from "../custom-fetch";
import type { ErrorType, BodyType } from "../custom-fetch";
type AwaitedInput<T> = PromiseLike<T> | T;
type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;
type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];
/**
 * Returns server health status
 * @summary Health check
 */
export declare const getHealthCheckUrl: () => string;
export declare const healthCheck: (options?: RequestInit) => Promise<HealthStatus>;
export declare const getHealthCheckQueryKey: () => readonly ["/api/healthz"];
export declare const getHealthCheckQueryOptions: <TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData> & {
    queryKey: QueryKey;
};
export type HealthCheckQueryResult = NonNullable<Awaited<ReturnType<typeof healthCheck>>>;
export type HealthCheckQueryError = ErrorType<unknown>;
/**
 * @summary Health check
 */
export declare function useHealthCheck<TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * Fetches video metadata and available formats from a URL
 * @summary Get video information
 */
export declare const getGetVideoInfoUrl: () => string;
export declare const getVideoInfo: (videoInfoRequest: VideoInfoRequest, options?: RequestInit) => Promise<VideoInfo>;
export declare const getGetVideoInfoMutationOptions: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof getVideoInfo>>, TError, {
        data: BodyType<VideoInfoRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof getVideoInfo>>, TError, {
    data: BodyType<VideoInfoRequest>;
}, TContext>;
export type GetVideoInfoMutationResult = NonNullable<Awaited<ReturnType<typeof getVideoInfo>>>;
export type GetVideoInfoMutationBody = BodyType<VideoInfoRequest>;
export type GetVideoInfoMutationError = ErrorType<ErrorResponse>;
/**
 * @summary Get video information
 */
export declare const useGetVideoInfo: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof getVideoInfo>>, TError, {
        data: BodyType<VideoInfoRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof getVideoInfo>>, TError, {
    data: BodyType<VideoInfoRequest>;
}, TContext>;
/**
 * Returns all downloadable formats for a given video URL
 * @summary Get available formats
 */
export declare const getGetVideoFormatsUrl: () => string;
export declare const getVideoFormats: (videoInfoRequest: VideoInfoRequest, options?: RequestInit) => Promise<FormatsResponse>;
export declare const getGetVideoFormatsMutationOptions: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof getVideoFormats>>, TError, {
        data: BodyType<VideoInfoRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof getVideoFormats>>, TError, {
    data: BodyType<VideoInfoRequest>;
}, TContext>;
export type GetVideoFormatsMutationResult = NonNullable<Awaited<ReturnType<typeof getVideoFormats>>>;
export type GetVideoFormatsMutationBody = BodyType<VideoInfoRequest>;
export type GetVideoFormatsMutationError = ErrorType<ErrorResponse>;
/**
 * @summary Get available formats
 */
export declare const useGetVideoFormats: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof getVideoFormats>>, TError, {
        data: BodyType<VideoInfoRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof getVideoFormats>>, TError, {
    data: BodyType<VideoInfoRequest>;
}, TContext>;
/**
 * Records a download and returns a download URL
 * @summary Initiate a download
 */
export declare const getInitiateDownloadUrl: () => string;
export declare const initiateDownload: (downloadRequest: DownloadRequest, options?: RequestInit) => Promise<DownloadResponse>;
export declare const getInitiateDownloadMutationOptions: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof initiateDownload>>, TError, {
        data: BodyType<DownloadRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof initiateDownload>>, TError, {
    data: BodyType<DownloadRequest>;
}, TContext>;
export type InitiateDownloadMutationResult = NonNullable<Awaited<ReturnType<typeof initiateDownload>>>;
export type InitiateDownloadMutationBody = BodyType<DownloadRequest>;
export type InitiateDownloadMutationError = ErrorType<ErrorResponse>;
/**
 * @summary Initiate a download
 */
export declare const useInitiateDownload: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof initiateDownload>>, TError, {
        data: BodyType<DownloadRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof initiateDownload>>, TError, {
    data: BodyType<DownloadRequest>;
}, TContext>;
/**
 * Returns recent download history
 * @summary Get download history
 */
export declare const getGetHistoryUrl: (params?: GetHistoryParams) => string;
export declare const getHistory: (params?: GetHistoryParams, options?: RequestInit) => Promise<HistoryResponse>;
export declare const getGetHistoryQueryKey: (params?: GetHistoryParams) => readonly ["/api/history", ...GetHistoryParams[]];
export declare const getGetHistoryQueryOptions: <TData = Awaited<ReturnType<typeof getHistory>>, TError = ErrorType<unknown>>(params?: GetHistoryParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getHistory>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getHistory>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetHistoryQueryResult = NonNullable<Awaited<ReturnType<typeof getHistory>>>;
export type GetHistoryQueryError = ErrorType<unknown>;
/**
 * @summary Get download history
 */
export declare function useGetHistory<TData = Awaited<ReturnType<typeof getHistory>>, TError = ErrorType<unknown>>(params?: GetHistoryParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getHistory>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * Deletes all download history records
 * @summary Clear all history
 */
export declare const getClearHistoryUrl: () => string;
export declare const clearHistory: (options?: RequestInit) => Promise<SuccessMessage>;
export declare const getClearHistoryMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof clearHistory>>, TError, void, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof clearHistory>>, TError, void, TContext>;
export type ClearHistoryMutationResult = NonNullable<Awaited<ReturnType<typeof clearHistory>>>;
export type ClearHistoryMutationError = ErrorType<unknown>;
/**
 * @summary Clear all history
 */
export declare const useClearHistory: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof clearHistory>>, TError, void, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof clearHistory>>, TError, void, TContext>;
/**
 * @summary Delete a history item
 */
export declare const getDeleteHistoryItemUrl: (id: number) => string;
export declare const deleteHistoryItem: (id: number, options?: RequestInit) => Promise<SuccessMessage>;
export declare const getDeleteHistoryItemMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteHistoryItem>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof deleteHistoryItem>>, TError, {
    id: number;
}, TContext>;
export type DeleteHistoryItemMutationResult = NonNullable<Awaited<ReturnType<typeof deleteHistoryItem>>>;
export type DeleteHistoryItemMutationError = ErrorType<unknown>;
/**
 * @summary Delete a history item
 */
export declare const useDeleteHistoryItem: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteHistoryItem>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof deleteHistoryItem>>, TError, {
    id: number;
}, TContext>;
/**
 * Returns aggregate download stats
 * @summary Get download statistics
 */
export declare const getGetStatsUrl: () => string;
export declare const getStats: (options?: RequestInit) => Promise<StatsResponse>;
export declare const getGetStatsQueryKey: () => readonly ["/api/stats"];
export declare const getGetStatsQueryOptions: <TData = Awaited<ReturnType<typeof getStats>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getStats>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getStats>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetStatsQueryResult = NonNullable<Awaited<ReturnType<typeof getStats>>>;
export type GetStatsQueryError = ErrorType<unknown>;
/**
 * @summary Get download statistics
 */
export declare function useGetStats<TData = Awaited<ReturnType<typeof getStats>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getStats>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export {};
//# sourceMappingURL=api.d.ts.map