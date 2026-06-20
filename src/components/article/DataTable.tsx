import { cn } from '@/lib/utils'

interface DataTableProps {
  headers: string[]
  rows: string[][]
  caption?: string
  striped?: boolean
  hoverable?: boolean
}

export function DataTable({ headers, rows, caption, striped = true, hoverable = true }: DataTableProps) {
  return (
    <figure className="my-8">
      <div className="overflow-x-auto rounded border border-[#b2b2be]/30">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-[#222222]">
              {headers.map((header, i) => (
                <th key={i} className="px-4 py-3 text-sm font-medium text-white whitespace-nowrap">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={i}
                className={cn(
                  'border-t border-[#b2b2be]/30 transition-colors',
                  striped && i % 2 === 0 ? 'bg-[#f7f8f9]' : 'bg-white',
                  hoverable && 'hover:bg-[#f0f0f0]'
                )}
              >
                {row.map((cell, j) => (
                  <td key={j} className="px-4 py-3 text-sm text-[#222222]">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {caption && (
        <figcaption className="mt-2 text-center text-[#575760] text-xs">{caption}</figcaption>
      )}
    </figure>
  )
}
