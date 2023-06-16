"use client";

import { useCallback, useState } from "react";
import { DefaultProps } from "./interfaces"
import { Button } from "./Button";

interface Props extends DefaultProps {
  endpoint: (data: FormData) => Promise<any>
  successMessage?: string
}

export const Form: React.FunctionComponent<Props> = ({ className, children, endpoint, successMessage }) => {
  const [ submitError, setSubmitError ] = useState<string>()
  const [ submitSuccess, setSubmitSuccess ] = useState<string>()
  const [ inProgress, setInProgress ] = useState<boolean>(false)

  const handleFormSubmit = useCallback((e: any) => {
    e.preventDefault()

    setSubmitError(undefined)
    setSubmitSuccess(undefined)
    setInProgress(true)
    const data = new FormData(e.target)

    endpoint(data)
      .then((ret: any) => {
        if (ret.error) {
          setSubmitError(ret.error)
        } else {
          setSubmitSuccess(successMessage || 'Success!')
        }
      })
      .catch((err: any) => {
        setSubmitError(err.message)
      })
      .finally(() => {
        setInProgress(false)
      })
  }, [endpoint, successMessage])

  return (
    <form className={className} onSubmit={handleFormSubmit}>
      {children}
      <div className="mt-2">
        {submitSuccess ? (
          <div className="box_info">{submitSuccess}</div>
        ) : (
          <Button className='mt-4' type="submit" inProgress={inProgress}>Submit</Button>
        )}
        {submitError && (
          <div className="box_error mt-2">{submitError}</div>
        )}
      </div>
    </form>
  )
}