var Bluebird = require('bluebird');

function AWS(bucket) {
	this._s3 = this.constructor._sdk;
	this._bucket = bucket || this.constructor._bucket;
	if(!this._s3 || !this._bucket) {
		throw new Error("Require seeds not available");
	}
}

AWS.prototype = {
	constructor: AWS,
	read() {

	},
	write() {
		var params = {
		  Bucket: 'STRING_VALUE', /* required */
		  Key: 'STRING_VALUE', /* required */
		  ACL: 'private | public-read | public-read-write | authenticated-read | aws-exec-read | bucket-owner-read | bucket-owner-full-control',
		  Body: new Buffer('...') || 'STRING_VALUE' || streamObject,
		  CacheControl: 'STRING_VALUE',
		  ContentDisposition: 'STRING_VALUE',
		  ContentEncoding: 'STRING_VALUE',
		  ContentLanguage: 'STRING_VALUE',
		  ContentLength: 0,
		  ContentMD5: 'STRING_VALUE',
		  ContentType: 'STRING_VALUE',
		  Expires: new Date() || 'Wed Dec 31 1969 16:00:00 GMT-0800 (PST)' || 123456789,
		  GrantFullControl: 'STRING_VALUE',
		  GrantRead: 'STRING_VALUE',
		  GrantReadACP: 'STRING_VALUE',
		  GrantWriteACP: 'STRING_VALUE',
		  Metadata: {
		    someKey: 'STRING_VALUE',
		    /* anotherKey: ... */
		  },
		  RequestPayer: 'requester',
		  SSECustomerAlgorithm: 'STRING_VALUE',
		  SSECustomerKey: new Buffer('...') || 'STRING_VALUE',
		  SSECustomerKeyMD5: 'STRING_VALUE',
		  SSEKMSKeyId: 'STRING_VALUE',
		  ServerSideEncryption: 'AES256 | aws:kms',
		  StorageClass: 'STANDARD | REDUCED_REDUNDANCY | STANDARD_IA',
		  WebsiteRedirectLocation: 'STRING_VALUE'
		};
		s3.putObject(params, function(err, data) {
		  if (err) console.log(err, err.stack); // an error occurred
		  else     console.log(data);           // successful response
		});
	},
	copy() {
		var params = {
		  Bucket: 'STRING_VALUE', /* required */
		  CopySource: 'STRING_VALUE', /* required */
		  Key: 'STRING_VALUE', /* required */
		  ACL: 'private | public-read | public-read-write | authenticated-read | aws-exec-read | bucket-owner-read | bucket-owner-full-control',
		  CacheControl: 'STRING_VALUE',
		  ContentDisposition: 'STRING_VALUE',
		  ContentEncoding: 'STRING_VALUE',
		  ContentLanguage: 'STRING_VALUE',
		  ContentType: 'STRING_VALUE',
		  CopySourceIfMatch: 'STRING_VALUE',
		  CopySourceIfModifiedSince: new Date() || 'Wed Dec 31 1969 16:00:00 GMT-0800 (PST)' || 123456789,
		  CopySourceIfNoneMatch: 'STRING_VALUE',
		  CopySourceIfUnmodifiedSince: new Date() || 'Wed Dec 31 1969 16:00:00 GMT-0800 (PST)' || 123456789,
		  CopySourceSSECustomerAlgorithm: 'STRING_VALUE',
		  CopySourceSSECustomerKey: new Buffer('...') || 'STRING_VALUE',
		  CopySourceSSECustomerKeyMD5: 'STRING_VALUE',
		  Expires: new Date() || 'Wed Dec 31 1969 16:00:00 GMT-0800 (PST)' || 123456789,
		  GrantFullControl: 'STRING_VALUE',
		  GrantRead: 'STRING_VALUE',
		  GrantReadACP: 'STRING_VALUE',
		  GrantWriteACP: 'STRING_VALUE',
		  Metadata: {
		    someKey: 'STRING_VALUE',
		    /* anotherKey: ... */
		  },
		  MetadataDirective: 'COPY | REPLACE',
		  RequestPayer: 'requester',
		  SSECustomerAlgorithm: 'STRING_VALUE',
		  SSECustomerKey: new Buffer('...') || 'STRING_VALUE',
		  SSECustomerKeyMD5: 'STRING_VALUE',
		  SSEKMSKeyId: 'STRING_VALUE',
		  ServerSideEncryption: 'AES256 | aws:kms',
		  StorageClass: 'STANDARD | REDUCED_REDUNDANCY | STANDARD_IA',
		  WebsiteRedirectLocation: 'STRING_VALUE'
		};
		s3.copyObject(params, function(err, data) {
		  if (err) console.log(err, err.stack); // an error occurred
		  else     console.log(data);           // successful response
		});
	},
	move() {

	},

	bucketList() {

	},
	
	createBucket() {

	},

	delete(key) {
		var params = {
		  Bucket: this.bucket, /* required */
		  Key: 'STRING_VALUE', /* required */
		  MFA: 'STRING_VALUE',
		  RequestPayer: 'requester',
		  VersionId: 'STRING_VALUE'
		};

		return new Promise( cb => {
			this._s3.deleteObject(params, function(err, data) {
				if(err) {
					throw new Error(err);
				}
				cb(data);
			});
		});
	},

	archive() {

	},

	restore() {

	},

	upload() {

	},

	s3() {
		return this._s3;
	}
};

AWS.seed = function(sdk) {
	AWS._sdk = sdk;
};

AWS.seed = function(bucket) {
	AWS._bucket = bucket;
};
