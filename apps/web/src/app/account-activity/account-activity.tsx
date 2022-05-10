import styles from './account-activity.module.scss'
import useAxios from 'axios-hooks'
import { DateTime, Settings } from 'luxon'
import { useEffect } from 'react'
/* eslint-disable-next-line */
export interface AccountActivityProps {
  id: number | string
}

export function AccountActivity({ id }: AccountActivityProps) {
  const [{ data, loading, error }, refetch] = useAxios('/activity')
  useEffect(() => {
    Settings.defaultLocale = 'tr'
  }, [])
  console.log(DateTime.now().toLocaleString())
  return (
    <div className="account-activity">
      <div className="account-activity-header">
        <h2>Hesap Hareketleri</h2>
      </div>
      <div className="account-activity-body">
        <table>
          <thead>
            <tr>
              <th>Tarih</th>
              <th>Açıklama</th>
              <th>Tutar</th>
              <th>Bakiye</th>
            </tr>
          </thead>
          <tbody>
            {data
              ?.filter((item: any) => {
                if (item.accountId === id) return item
              })
              .map(
                (
                  { accountId, description, amount, type, createdAt }: any,
                  index: number,
                ) => {
                  console.log(
                    DateTime.fromISO(createdAt).toLocaleParts(
                      DateTime.DATE_FULL,
                    ),
                  )
                  return (
                    <tr key={accountId}>
                      <td>
                        <p>
                          {
                            DateTime.fromISO(createdAt).toLocaleParts(
                              DateTime.DATE_FULL,
                            )[0].value
                          }
                        </p>
                        <p>
                          {
                            DateTime.fromISO(createdAt).toLocaleParts(
                              DateTime.DATE_FULL,
                            )[2].value
                          }
                        </p>
                      </td>
                      <td>{description}</td>
                      <td>{amount}</td>
                      <td>{type}</td>
                    </tr>
                  )
                },
              )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AccountActivity
