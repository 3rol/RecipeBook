<?php declare(strict_types=1);

/**
 * @license Apache 2.0
 */

namespace OpenApi\Examples\Nesting;

use OpenApi\Annotations as OA;

/**
 * No schema!
 */
class SoCloseModel extends AlmostModel
{
    /**
     * @OA\Property
     *
     * @var string
     */
    public $soClose;
}
