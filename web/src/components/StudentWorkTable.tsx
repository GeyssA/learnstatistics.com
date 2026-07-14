import { AutoGrowTextarea } from './AutoGrowTextarea'
import type { StudentTableDef } from '../data/studentTables'
import { studentTableCellId } from '../data/studentTables'

interface StudentWorkTableProps {
  table: StudentTableDef
  answers: Record<string, string>
  setAnswer: (id: string, v: string) => void
}

export function StudentWorkTable({ table, answers, setAnswer }: StudentWorkTableProps) {
  function renderCell(rowKey: string, colKey: string, cell: { display: string; editable?: boolean }) {
    const id = studentTableCellId(table.id, rowKey, colKey)
    if (!cell.editable) {
      return <span className="text-slate-700">{cell.display || '\u00a0'}</span>
    }
    const val = answers[id] ?? ''
    return (
      <>
        <AutoGrowTextarea
          value={val}
          onChange={(v) => setAnswer(id, v)}
          rows={1}
          className="student-table-input w-full min-w-[3rem] px-2 py-1 rounded border border-brand-300 bg-brand-50/60 text-sm text-slate-800 text-center focus:outline-none focus:ring-2 focus:ring-brand-400 print:hidden min-h-[2rem]"
        />
        <span className="hidden print:inline whitespace-pre-wrap">{val || '…'}</span>
      </>
    )
  }

  return (
    <div className="space-y-2 student-work-table">
      <p className="text-sm font-semibold text-slate-800">{table.label}</p>
      <div className="overflow-x-auto rounded-lg border border-slate-200">
        <table className="w-full text-sm border-collapse min-w-[28rem]">
          <thead>
            <tr className="bg-slate-100">
              {table.columns.map((col) => (
                <th
                  key={col.key}
                  className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-600"
                >
                  {col.headerHtml ? (
                    <span dangerouslySetInnerHTML={{ __html: col.headerHtml }} />
                  ) : (
                    col.header
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row) => (
              <tr key={row.key}>
                {table.columns.map((col) => (
                  <td key={col.key} className="border border-slate-200 px-3 py-2 align-middle">
                    {renderCell(row.key, col.key, row.cells[col.key] ?? { display: '', editable: true })}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
