export interface Root {
  execution_id: string
  query_id: number
  state: string
  submitted_at: string
  expires_at: string
  execution_started_at: string
  execution_ended_at: string
  result: Result
}

export interface Result {
  rows: Row[]
  metadata: Metadata
}

export interface Row {
  address: string
  value: number
}

export interface Metadata {
  column_names: string[]
  result_set_bytes: number
  total_row_count: number
  datapoint_count: number
  pending_time_millis: number
  execution_time_millis: number
}

