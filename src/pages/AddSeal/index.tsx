import React from 'react'
import AppBody from '../AppBody'
import { CardBody, Button } from '../../uikit'
import { useForm } from 'react-hook-form'
import PageHeader from 'components/PageHeader'
import axios from 'axios'

const AddSeal = () => {
  const [status, setStatus] = React.useState('')

  React.useEffect(() => {
    setStatus('')
    return () => {
      setStatus('')
    }
  }, [])
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    const options = {
      method: 'POST',
      url: '/.netlify/functions/add',
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        _id: data.Address,
        coinName: data.Name,
        coinAddress: data.Address,
        coinLogo: data.Logo,
        coinWebsite: data.Website,
        auditLogo: data.Logo,
        auditFile: data.Website,
        hash: data.Password,
      },
    }
    axios
      //@ts-ignore
      .request(options)
      .then(function () {
        setStatus('Success')
      })
      .catch(function () {
        setStatus('Failed')
      })
  }
  return (
    <>
      {/*@ts-ignore*/}
      <style global jsx>
        {`
          .pure-form input[type='color'],
          .pure-form input[type='date'],
          .pure-form input[type='datetime-local'],
          .pure-form input[type='datetime'],
          .pure-form input[type='email'],
          .pure-form input[type='month'],
          .pure-form input[type='number'],
          .pure-form input[type='password'],
          .pure-form input[type='search'],
          .pure-form input[type='tel'],
          .pure-form input[type='text'],
          .pure-form input[type='time'],
          .pure-form input[type='url'],
          .pure-form input[type='week'],
          .pure-form select,
          .pure-form textarea {
            padding: 0.5em 0.6em;
            display: inline-block;
            border: 1px solid #ccc;
            -webkit-box-shadow: inset 0 1px 3px #ddd;
            box-shadow: inset 0 1px 3px #ddd;
            border-radius: 4px;
            vertical-align: middle;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
          }
          .pure-form input:not([type]) {
            padding: 0.5em 0.6em;
            display: inline-block;
            border: 1px solid #ccc;
            -webkit-box-shadow: inset 0 1px 3px #ddd;
            box-shadow: inset 0 1px 3px #ddd;
            border-radius: 4px;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
          }
          .pure-form input[type='color'] {
            padding: 0.2em 0.5em;
          }
          .pure-form input[type='color']:focus,
          .pure-form input[type='date']:focus,
          .pure-form input[type='datetime-local']:focus,
          .pure-form input[type='datetime']:focus,
          .pure-form input[type='email']:focus,
          .pure-form input[type='month']:focus,
          .pure-form input[type='number']:focus,
          .pure-form input[type='password']:focus,
          .pure-form input[type='search']:focus,
          .pure-form input[type='tel']:focus,
          .pure-form input[type='text']:focus,
          .pure-form input[type='time']:focus,
          .pure-form input[type='url']:focus,
          .pure-form input[type='week']:focus,
          .pure-form select:focus,
          .pure-form textarea:focus {
            outline: 0;
            border-color: #129fea;
          }
          .pure-form input:not([type]):focus {
            outline: 0;
            border-color: #129fea;
          }
          .pure-form input[type='checkbox']:focus,
          .pure-form input[type='file']:focus,
          .pure-form input[type='radio']:focus {
            outline: thin solid #129fea;
            outline: 1px auto #129fea;
          }
          .pure-form .pure-checkbox,
          .pure-form .pure-radio {
            margin: 0.5em 0;
            display: block;
          }
          .pure-form input[type='color'][disabled],
          .pure-form input[type='date'][disabled],
          .pure-form input[type='datetime-local'][disabled],
          .pure-form input[type='datetime'][disabled],
          .pure-form input[type='email'][disabled],
          .pure-form input[type='month'][disabled],
          .pure-form input[type='number'][disabled],
          .pure-form input[type='password'][disabled],
          .pure-form input[type='search'][disabled],
          .pure-form input[type='tel'][disabled],
          .pure-form input[type='text'][disabled],
          .pure-form input[type='time'][disabled],
          .pure-form input[type='url'][disabled],
          .pure-form input[type='week'][disabled],
          .pure-form select[disabled],
          .pure-form textarea[disabled] {
            cursor: not-allowed;
            background-color: #eaeded;
            color: #cad2d3;
          }
          .pure-form input:not([type])[disabled] {
            cursor: not-allowed;
            background-color: #eaeded;
            color: #cad2d3;
          }
          .pure-form input[readonly],
          .pure-form select[readonly],
          .pure-form textarea[readonly] {
            background-color: #eee;
            color: #777;
            border-color: #ccc;
          }
          .pure-form input:focus:invalid,
          .pure-form select:focus:invalid,
          .pure-form textarea:focus:invalid {
            color: #b94a48;
            border-color: #e9322d;
          }
          .pure-form input[type='checkbox']:focus:invalid:focus,
          .pure-form input[type='file']:focus:invalid:focus,
          .pure-form input[type='radio']:focus:invalid:focus {
            outline-color: #e9322d;
          }
          .pure-form select {
            height: 2.25em;
            border: 1px solid #ccc;
            background-color: #fff;
          }
          .pure-form select[multiple] {
            height: auto;
          }
          .pure-form label {
            margin: 0.5em 0 0.2em;
          }
          .pure-form fieldset {
            margin: 0;
            padding: 0.35em 0 0.75em;
            border: 0;
          }
          .pure-form legend {
            display: block;
            width: 100%;
            padding: 0.3em 0;
            margin-bottom: 0.3em;
            color: #333;
            border-bottom: 1px solid #e5e5e5;
          }
          .pure-form-stacked input[type='color'],
          .pure-form-stacked input[type='date'],
          .pure-form-stacked input[type='datetime-local'],
          .pure-form-stacked input[type='datetime'],
          .pure-form-stacked input[type='email'],
          .pure-form-stacked input[type='file'],
          .pure-form-stacked input[type='month'],
          .pure-form-stacked input[type='number'],
          .pure-form-stacked input[type='password'],
          .pure-form-stacked input[type='search'],
          .pure-form-stacked input[type='tel'],
          .pure-form-stacked input[type='text'],
          .pure-form-stacked input[type='time'],
          .pure-form-stacked input[type='url'],
          .pure-form-stacked input[type='week'],
          .pure-form-stacked label,
          .pure-form-stacked select,
          .pure-form-stacked textarea {
            display: block;
            margin: 0.25em 0;
          }
          .pure-form-stacked input:not([type]) {
            display: block;
            margin: 0.25em 0;
          }
          .pure-form-aligned input,
          .pure-form-aligned select,
          .pure-form-aligned textarea,
          .pure-form-message-inline {
            display: inline-block;
            vertical-align: middle;
          }
          .pure-form-aligned textarea {
            vertical-align: top;
          }
          .pure-form-aligned .pure-control-group {
            margin-bottom: 0.5em;
          }
          .pure-form-aligned .pure-control-group label {
            text-align: right;
            display: inline-block;
            vertical-align: middle;
            width: 10em;
            margin: 0 1em 0 0;
          }
          .pure-form-aligned .pure-controls {
            margin: 1.5em 0 0 11em;
          }
          .pure-form .pure-input-rounded,
          .pure-form input.pure-input-rounded {
            border-radius: 2em;
            padding: 0.5em 1em;
          }
          .pure-form .pure-group fieldset {
            margin-bottom: 10px;
          }
          .pure-form .pure-group input,
          .pure-form .pure-group textarea {
            display: block;
            padding: 10px;
            margin: 0 0 -1px;
            border-radius: 0;
            position: relative;
            top: -1px;
          }
          .pure-form .pure-group input:focus,
          .pure-form .pure-group textarea:focus {
            z-index: 3;
          }
          .pure-form .pure-group input:first-child,
          .pure-form .pure-group textarea:first-child {
            top: 1px;
            border-radius: 4px 4px 0 0;
            margin: 0;
          }
          .pure-form .pure-group input:first-child:last-child,
          .pure-form .pure-group textarea:first-child:last-child {
            top: 1px;
            border-radius: 4px;
            margin: 0;
          }
          .pure-form .pure-group input:last-child,
          .pure-form .pure-group textarea:last-child {
            top: -2px;
            border-radius: 0 0 4px 4px;
            margin: 0;
          }
          .pure-form .pure-group button {
            margin: 0.35em 0;
          }
          .pure-form .pure-input-1 {
            width: 100%;
          }
          .pure-form .pure-input-3-4 {
            width: 75%;
          }
          .pure-form .pure-input-2-3 {
            width: 66%;
          }
          .pure-form .pure-input-1-2 {
            width: 50%;
          }
          .pure-form .pure-input-1-3 {
            width: 33%;
          }
          .pure-form .pure-input-1-4 {
            width: 25%;
          }
          .pure-form-message-inline {
            display: inline-block;
            padding-left: 0.3em;
            color: #666;
            vertical-align: middle;
            font-size: 0.875em;
          }
          .pure-form-message {
            display: block;
            color: #666;
            font-size: 0.875em;
          }
          @media only screen and (max-width: 480px) {
            .pure-form button[type='submit'] {
              margin: 0.7em 0 0;
            }
            .pure-form input:not([type]),
            .pure-form input[type='color'],
            .pure-form input[type='date'],
            .pure-form input[type='datetime-local'],
            .pure-form input[type='datetime'],
            .pure-form input[type='email'],
            .pure-form input[type='month'],
            .pure-form input[type='number'],
            .pure-form input[type='password'],
            .pure-form input[type='search'],
            .pure-form input[type='tel'],
            .pure-form input[type='text'],
            .pure-form input[type='time'],
            .pure-form input[type='url'],
            .pure-form input[type='week'],
            .pure-form label {
              margin-bottom: 0.3em;
              display: block;
            }
            .pure-group input:not([type]),
            .pure-group input[type='color'],
            .pure-group input[type='date'],
            .pure-group input[type='datetime-local'],
            .pure-group input[type='datetime'],
            .pure-group input[type='email'],
            .pure-group input[type='month'],
            .pure-group input[type='number'],
            .pure-group input[type='password'],
            .pure-group input[type='search'],
            .pure-group input[type='tel'],
            .pure-group input[type='text'],
            .pure-group input[type='time'],
            .pure-group input[type='url'],
            .pure-group input[type='week'] {
              margin-bottom: 0;
            }
            .pure-form-aligned .pure-control-group label {
              margin-bottom: 0.3em;
              text-align: left;
              display: block;
              width: 100%;
            }
            .pure-form-aligned .pure-controls {
              margin: 1.5em 0 0 0;
            }
            .pure-form-message,
            .pure-form-message-inline {
              display: block;
              font-size: 0.75em;
              padding: 0.2em 0 0.8em;
            }
          }
        `}
      </style>
      <AppBody>
        <PageHeader title={'DONK Private Access'} swap={false} />
        <CardBody>
          <form onSubmit={handleSubmit(onSubmit)} className="pure-form pure-form-stacked">
            <input
              type="text"
              placeholder="Name"
              {...register('Name', { required: true, max: 50, min: 1, maxLength: 80 })}
            />
            <input type="url" placeholder="Logo" {...register('Logo', { required: true })} />
            <input type="text" placeholder="Swap Address" {...register('Address', { required: true })} />
            <input type="url" placeholder="Website" {...register('Website', { required: true })} />
            <input type="password" placeholder="Secret" {...register('Password', { required: true })} />
            <Button type="submit">ADD COIN</Button>
          </form>
          {status === 'Success' && (
            <>
              <br />
              <pre
                style={{
                  color: 'green',
                }}
              >
                Success
              </pre>
            </>
          )}
          {status === 'Failed' && (
            <>
              <br />
              <pre
                style={{
                  color: 'red',
                }}
              >
                Failed
              </pre>
            </>
          )}
        </CardBody>
      </AppBody>
    </>
  )
}

export default AddSeal
